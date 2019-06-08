import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// Imagenes
import logo from '../images/logo.png'
// Iconos
import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component {
    state ={
        isOpen:false
    }

    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach resort" style={{maxHeight: "45px",minHeight: "20px", display: "flex" }}/>
                        </Link>
                        <button type="button" 
                        onClick={this.handleToggle}
                        className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/Mihabitacion"> Mi Habitación</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
