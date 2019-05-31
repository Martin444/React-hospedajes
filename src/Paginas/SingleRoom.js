import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../Component/StyledHero'


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        // console.log(this.props)
        // Le asigno a slug el valor que trae por props para cada habitacion
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    static contextType = RoomContext;

    componentDidMount(){

    }


    render() {
        const {getRoom} = this.context
        // le asigno el id especifico a la funcion que me llevara a la single
        const room = getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <h3>Hubo un error con pagina</h3>
                <Link to="/Habitaciones" className="btn-primary">
                    Volver
                </Link>
            </div>
        }

        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        const [mainImg,...defaultImg] = images

        return (
            // Le paso la imagenes de cada slug como props al StyledHero
        <>
            <StyledHero img={mainImg ||  this.state.defaultBcg}>
                <Banner title={`${name}`}>
                    <Link to='/Habitaciones' className="btn-primary">
                        Volver
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                {defaultImg.map((item,index)=>{
                    return <img key={index} src={item} alt={name}/>
                })}
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Detalles</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Información</h3>
                        <h6>Precio: ${price}</h6>
                        <h6>Tamaño: {size} SQFT</h6>
                        <h6>Capacidad máxima: {
                        capacity > 1 ?`${capacity} personas `: `${capacity} persona`}</h6>
                        <h6>{pets? "Se aceptan mascotas" : "No se aceptan mascotas"}</h6>
                        <h6>{breakfast && "Desayuno gratis"}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=> {
                        return <li key={index}>- {item}</li>
                    })}
                </ul>
            </section>
        </>
        )
    }
}
