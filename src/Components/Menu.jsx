import React from 'react'

import logo192 from '../assets/logo192.png'



function Menu() {
    return (
        <nav className="navbar bg-primary navbar-expand-md bg-dark border-bottom border-white border-hover" data-bs-theme="dark">
            <div className="container-fluid">

                <button className="navbar-toggler order-2 order-md-1" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse order-3 order-md-2" id="navbar-left">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item ">
                            <a className="nav-link active  text-white pass-opt" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white pass-opt" href="/services">Servicios</a>
                        </li>
                    </ul>
                </div>
                <a className="navbar-brand order-1 order-md-3" href="/">
                    <img src={logo192} alt="Logo" style={{ height: "3rem" }} />
                </a>
                
                <div className="collapse navbar-collapse order-4 order-md-4" id="navbar-right">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white pass-opt" href="/about">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white pass-opt" href='/contact'>Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Menu