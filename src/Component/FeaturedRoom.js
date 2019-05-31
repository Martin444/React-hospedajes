import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default class FeaturedRoom extends Component {
    static contextType = RoomContext
    render() {
        const {loading, featuredRooms : rooms} = this.context
        // eslint-disable-next-line 
    //  rooms = rooms.map((room) => {
    //         return (<Room key={room.id} room={room} />);
    //     });

        return (
            <section className="featured-rooms">
                <Title title="Habitaciones"/>
                <div className="featured-rooms-center">
                    {
                        rooms.map((room) => {
                            return(
                                <div>{
                                    loading? <Loading/> : <Room key={room.id} room={room}/>
                                }</div>
                            );
                        })
                    }
                    {/* {loading? <Loading/>: rooms} */}
                </div>
            </section>
        )
    }
}
