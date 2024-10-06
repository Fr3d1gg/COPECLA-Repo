import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faMailBulk, faPhone,faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
    return (
        <footer className='bg-light text-dark pt-5 pb-4 mt-2 '>
            <div className='container text-center text-md-start'>
                <div className='row text-center text-md-start'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <h5 className='text-uppercase mb-4 fw-bold text-body-secondary '>Nosotros</h5>
                        <hr className='mb-4' />
                        <p class="text-justify">
                        Somos un equipo de expertos peritos en clasificación arancelaria y merceología, comprometidos con la excelencia y la precisión en nuestros servicios. Con más de 16 años de experiencia, nos especializamos en la clasificación técnica, jurídica, lógica y arancelaria de productos de comercio exterior.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4 fw-bold text-body-secondary'>Ayuda</h5>
                        <hr className='mb-4' />
                        <p>
                            <a href="/contact">Hacer una consulta</a>
                        </p>
                        <p >
                            <a href="/services">Servicios</a>
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                        <h5 className='text-uppercase mb-4  text-body-secondary'>Contacto</h5>
                        <hr className='mb-4' />
                        <p>
                            <li className='list-group-item'><FontAwesomeIcon icon={faHome} />  Ciudad de Mexico</li>
                        </p>
                        <p>
                            <li className='list-group-item'><FontAwesomeIcon icon={faMailBulk} /> claudiazamudiolegales@gmail.com</li>
                        </p>
                        <p>
                            copecla@consejodeperitos.com
                        </p>
                        <p>
                            <li className='list-group-item'><FontAwesomeIcon icon={faPhone} /> 55 2118 3506</li>
                        </p>
                        <p>
                        <li className='list-group-item'><a href="mailto:czamudio@coaliciondeimportadores.com.mx" className='color-footer'><FontAwesomeIcon icon={faEnvelope} />czamudio@coaliciondeimportadores.com.mx</a> </li> 
                        </p>
                                  
                        <p>
                        <li className='list-group-item'><a href="mailto:contacto@coaliciondeimportadores.com.mx" className='color-footer '><FontAwesomeIcon icon={faInbox}  />contacto@coaliciondeimportadores.com.mx</a></li> 

                        </p>
                        <p>
                            
                            <li className='list-group-item'><h4>CNIEC</h4></li>
                            <a href="http://www.coaliciondeimportadores.com.mx" className='color-footer '>http://www.coaliciondeimportadores.com.mx </a><br />
                            <a href="https://www.facebook.com/CNIEC" className='color-footer '>https://www.facebook.com/CNIEC</a><br />
                            <a href="https://www.facebook.com/claudia.cniec/" className='color-footer '>https://www.facebook.com/claudia.cniec/</a><br />
                            <li className='list-group-item'><h4>Facebook</h4></li>
                            <a href="https://shorturl.at/mnWuz" className='color-footer '>https://www.facebook.com/profile.php</a>
                        </p>        
                                    
                               
                                    
                             
                    </div>
                    <hr className='mb-4 ' />
                    <div className="text-center mb-2">
                        <p>
                            Copyright Todos los derechos reservados  &copy; 
                            
                        </p>

                    </div>



                </div>
            </div>
        </footer>
    )
}

export default Footer