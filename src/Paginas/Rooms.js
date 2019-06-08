import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import Data from '../Component/DatoInput'
// import {Link} from 'react-router-dom'

const Rooms = () => {
    return (
        <>
        <Hero hero="roomsHero">
            <Banner title="Publicá tu habitación">
                {/* <Link to='/' className='btn-primary'>
                    Volver al inicio
                </Link> */}
            </Banner>
        </Hero>
            <Data/>
        </>
    )
}

export default Rooms
