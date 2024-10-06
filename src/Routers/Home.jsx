import React from 'react'
import Menu from '../Components/Menu'
import bg3 from '../assets/img/bg3.webp'
import Log from '../Asset 11Copec.svg'
import Footer from '../Components/Footer'

function Home() {
    return (

        <div className='bg-dark callout'>
            <Menu />

        <div className="card text-bg-dark m-0 border-0 rounded-0 bck-img ">
            
            <div className="card-img-overlay d-flex flex-column justify-content-center align-items-center">
            <img src={Log} className='img-fluid  responsive-svg responsive-svg '/>
            <h1 className="card-title text-center  rounded  text-wrap">CONSEJO DE PERITOS EN CLASIFICACION ARANCELARIA (COPECLA)</h1>
            <p className="card-text text-center bg-body-tertiary rounded text-secondary px-2" style={{ fontSize: "1.2rem" }}><large>EXPERIENCIA Y CONOCIMIENTO QUE TRANSFORMA TU VISIÓN</large></p>
            <a class="btn btn-outline-primary btn-lg" href="/services">Servicios del consejo</a>
            </div>
  </div>

            <Footer />
        </div>
    )
}

export default Home