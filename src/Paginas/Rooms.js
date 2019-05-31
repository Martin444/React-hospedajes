import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
// import {Link} from 'react-router-dom'
import RoomsContainer from '../Component/RoomContainer'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Nuestras Habitaciones">
                {/* <Link to='/' className='btn-primary'>
                    Volver al inicio
                </Link> */}
            </Banner>
        </Hero>
        <RoomsContainer/>
        </>
    )
}

export default Rooms
