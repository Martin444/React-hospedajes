import React from 'react'
import Hero from '../Component/Hero'
import Banner from '../Component/Banner'
import {Link} from 'react-router-dom'
export default function Error() {
    return (
        <Hero>
            <Banner title='404' subtitle='Page not found'>
                <Link to='/' className="btn-primary">
                    Volver al inicio
                </Link>
            </Banner>
        </Hero>
    )
}
