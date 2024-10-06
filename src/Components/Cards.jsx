import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faEye, faUsers } from "@fortawesome/free-solid-svg-icons";

function Cards() {
    return (
        <div className='container mt-3'>
            <div className="card-group ">
                <div className="card  ">
                    <FontAwesomeIcon icon={faEarthAmericas} style={{ height: "10rem" }} className='mt-3 color-icon ' />
                    <div className="card-body">
                        <h5 className="card-title text-center color-txt fw-bold">MISIÓN</h5>
                        <p className="card-text text-justify">Ser la organización más influyente y representativa en materia de clasificación arancelaria y merceología que brinda certeza jurídica, soporte técnico, jurídico, lógico y científico ante dudas o discrepancias referentes a la aplicación de la metodología de clasificación arancelaria que se establece en los textos de las Reglas Generales y Reglas Complementarias.</p>
                     
                    </div>
                </div>
                <div className="card ">
                    <FontAwesomeIcon icon={faUsers} style={{ height: "10rem" }} className='mt-3 color-icon ' />
                    <div className="card-body">
                        <h5 className="card-title text-center color-txt fw-bold">NUESTROS PRINCIPIOS</h5>
                        <p className="card-text">
                            <ul class="list-group">
                                <li class="list-group-item text-center">Compromiso </li>
                                <li class="list-group-item text-center">Responsabilidad</li>
                                <li class="list-group-item text-center">Proactividad</li>
                                <li class="list-group-item text-center">Honestidad</li>
                                <li class="list-group-item text-center">Legalidad</li>
                            </ul>
                        </p>
                        
                    </div>
                </div>
                <div className="card ">
                    <FontAwesomeIcon icon={faEye} style={{ height: "10rem" }} className='mt-3 color-icon ' />
                    <div className="card-body">
                        <h5 className="card-title text-center color-txt fw-bold">VISIÓN</h5>
                        <p className="card-text text-justify">Ser el Consejo de expertos altamente especializados de mayor impacto a nivel mundial en los temas relacionados con la clasificación arancelaria y la mercadotecnia, sirviendo como un referente y fuente del conocimiento, estudio y análisis de productos de comercio exterior</p>
         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards