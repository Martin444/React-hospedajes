import React, { Component } from 'react'
import items from './data'
// importo contentful 
import Client from './Contentful'
import { async } from 'q';



const RoomContext = React.createContext();

export default class RoomProvider extends Component {
    state ={
        // Estados para manejas la barra de busqueda
        rooms:[],
        sortedRooms: [],
        featuredRooms:[],
        loading: true,
        type: 'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast: false,
        pets:false
    }
// get el contetful del cliente

getData = async() =>{
    try {
        let response = await Client.getEntries({
            content_type: 'tartagalresort',
            // order: "sys.createdAt"
            order:''
        });

        let rooms = this.formatData(response.items)
    let featuredRooms = rooms.filter(room => room.featured=== true)
    // añade los valores de filtro 
    let maxPrice = Math.max(...rooms.map(item => item.price))
    let maxSize= Math.max(...rooms.map(item => item.size))
    this.setState({
        rooms,
        featuredRooms,
        sortedRooms:rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize
    })
    } catch (error) {
        console.log(error)
    }
}

componentDidMount(){
    this.getData()
}

handleChange = event =>{
    // detecta el cambio de tipo en el select
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState({
        [name]:value
    }, this.filterRooms
    )
}

filterRooms = ()=>{
    // detecta el cambio del handlechange y le asigna nuevo valor a los state
    let{
        rooms, type,capacity,price,minSize,maxSize,breakfast,pets
    } = this.state
// todas las habitaciones
    let tempRooms = [...rooms];
    // transformar valores
    capacity = parseInt(capacity)

// filtrar por tipo
    if(type !== 'all'){
        tempRooms = tempRooms.filter(room => room.type === type)
    }

// filtrar por capacidad
    if(capacity !==1){
        tempRooms = tempRooms.filter(room => room.capacity >= capacity)
    }

    // filtrar por precio
    tempRooms = tempRooms.filter(room => room.price <= price);

    // filtrar por tamaño
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    // filtrar por desayuno
    if(breakfast){
        tempRooms = tempRooms.filter(room => room.breakfast === true)
    }

    // filtrar por mascotas
    if(breakfast){
        tempRooms = tempRooms.filter(room => room.pets === true)
    }



    this.setState({
        sortedRooms: tempRooms
    })

}

formatData(items){
    // Mapea los datos que trae de data.js
    let tempItems = items.map(item => {
        // Saca las  rutas especificas del id y la imagen
        let id = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url)
        // engloba todo en room
        let room = {...item.fields,images,id}
        return room;
    })
    return tempItems;
}

// Funcion que exporta el slug unico para seleccionar en Single
getRoom = (slug) =>{
    let tempRooms = [...this.state.rooms]
    const room = tempRooms.find(room => room.slug === slug)
    return room;
}




    render() {
        return (
            // Envia los datos del estate como proveedor al index.js para usarlos globalmente
            <RoomContext.Provider value={{...this.state, 
                getRoom: this.getRoom, 
                handleChange: this.handleChange}}
                >

                {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export{RoomProvider, RoomConsumer, RoomContext}
