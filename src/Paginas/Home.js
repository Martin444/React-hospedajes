import React, { Component } from 'react'
import RoomContainer from '../Component/RoomContainer'
import Hero from '../Component/Hero'

import {Link} from 'react-router-dom'

import Banner from '../Component/Banner'
import Services from '../Component/Services'
import FeaturedRooms from '../Component/FeaturedRoom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <RoomContainer/>
                {/* <Hero>
                    <Banner title="Las mejores habitaciónes" subtitle="Precios super bajos">
                        <Link to='/Habitaciones' className="btn-primary">
                            Buscar habitación
                        </Link>
                    </Banner>
                </Hero>
                <Services/>
                <FeaturedRooms/> */}
            </div>
        )
    }
}
