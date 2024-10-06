import React from 'react'
import ExpertImg from '../assets/img/expertImg.webp'

function BigCard() {
    return (
        <div className='container mt-3'>
            <div className="card mb-3">
                <img src={ExpertImg} className="card-img-top img-fluid object-fit-sm-contain" alt="expertImg.jpg" />
                <div className="card-body">
                    <h5 className="card-title text-center color-txt fw-bold">¿QUIENES SOMOS?</h5>
                    <p className="card-text text-justify">Un grupo de expertos peritos en clasificación arancelaria y merceología, que realizamos de forma técnica, jurídica, lógica y arancelaria, la clasificación arancelaria de productos, con más de 16 años de experiencia en la toma de decisiones y designación de fracciones arancelarias basándonos en la naturaleza de las mercancías de comercio exterior.</p>
                    
                </div>
            </div>
        </div>
    )
}

export default BigCard