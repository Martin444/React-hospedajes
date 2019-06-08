import React, { Component } from 'react'

export default class DatoInput extends Component {
    render() {
        return (
            <>
                <section className="single-room">
                <div className="single-room-info">
                    <article className="desc">
                        <h3>Nuestro servicio</h3>
                        <p>Ahora podes publicar la habitación que querias alquilar y nosotros facilitamos el resto para quienes la buscan</p>
                    </article>
                    <article className="info">
                        <h3>¿Qué necesitas?</h3>
                        <h6>Ciudad: Ya seas de Tartagal, Mosconi, Aguaray, Salta. no importa el lugar en el que pertenezcas siempre sos bienvenido</h6>
                        <h6>Personas limite: Es importante aclarar si el espacio solo puede ser habitado por una persona, dos o más </h6>
                        <h6>Precio: El precio puede variar de acuerdo las caracteristicas y detalles que posea el inmueble </h6>
                        <h6>Tamaño: A la hora de una mudanza puede que tu inquilino posea pertenencias, por eso es importante remarcar el tamaño de la habitación</h6>
                        <h6>Desayuno y mascotas: Dos extras que pueden ser importantes para tus inquilinos</h6>
                    </article>
                   

                <a href="https://wa.me/5493873413199" className="btn btn-primary" style={{textAlign: "center"}}>Empezar</a>
                </div>
                </section>
            </>
        )
    }
}
