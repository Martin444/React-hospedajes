import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../Component/Title'
// enviar todos los datos unicos 

const getUnique = (items, value)=>{
    return [...new Set(items.map(item => item[value]))]
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {
        handleChange, 
        type, 
        capacity,
        price, 
        minPrice, 
        maxPrice, 
        minSize, 
        maxSize,
        breakfast,
        pets
    } = context;
    // get unique types
    let types = getUnique(rooms,'type');
    // añadir todos
    types = ['all', ...types]
    // mapeo el jsx
    types = types.map((item, index)=>{
        return <option value={item} key={index}>{item}</option>
    })

    let people = getUnique(rooms,'capacity');
    people = people.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <section className="filter-container">
            <Title title="Buscar habitación"/>
            <form className="filter-form">
                {/* Selector */}
                <div className="form-group">
                    <label htmlFor="type">Tipo</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {
                            types
                        }
                    </select>
                </div>
                {/* Fin selector */}
                {/* Capacidad */}
                <div className="form-group">
                    <label htmlFor="capacity">Capacidad</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {
                            people
                        }
                    </select>
                </div>
                {/* Fin Capacidad */}
                {/* Precios */}
                <div className="form-group">
                   <label htmlFor="price">
                    Precio ${price}   
                    </label> 
                    <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange}
                    className="form-selector"/>
                </div>
                {/* Fin Precios */}
                {/* Tamaño */}
                <div className="form-group">
                    <label htmlFor="size">Tamaño</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input"></input>
                        <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input"></input>

                    </div>
                </div>
                {/* Fin Tamaño */}
                
                {/* Extras */}
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange}/>
                        <label htmlFor="breakfast">Desayuno</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange}/>
                        <label htmlFor="breakfast">Mascotas</label>
                    </div>
                </div>
                {/* Fin Extras */}
                
            </form>
        </section>
    )
}
