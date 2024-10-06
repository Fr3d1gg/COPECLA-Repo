import React from 'react'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays,faMagnifyingGlass,faNewspaper } from '@fortawesome/free-solid-svg-icons'
function Services() {
  return (
    <div>
      <Menu />
      <div className="container border p-5 my-5 bg-light shadow-lg rounded  bg-light">
        <h2 className='h2 text-center mt-3 color-txt fw-bold'>CONSEJO DE PERITOS EN CLASIFICACION ARANCELARIA  (COPECLA)</h2>
        <p className='text-center rounded-3  '>En nuestro Consejo, puedes hacer tu consulta, solucionar una controversia, obtener una opinión, reclasificar tu producto conforme a las distintas versiones del sistema armonizado de la OMA, entre otros beneficios.</p>
        <ul className="list-group list-group-horizontal-sm justify-content-center ">
          <li className="list-group-item text-center border-secondary  border-opacity-50 color-txt fw-bold">SESIONES MENSUALES DEL CONSEJO DE PERITOS <br /><FontAwesomeIcon icon={faCalendarDays}  className='fa-3x color-icon py-2'/></li>
          <li className="list-group-item text-center border-secondary border-opacity-50 color-txt fw-bold">CONSULTA LAS MINUTAS DE LAS REUNIONES DE CONSEJO <br /><FontAwesomeIcon icon={faMagnifyingGlass}  className='fa-3x color-icon py-2'/></li>
          <li className="list-group-item text-center border-secondary border-opacity-50 color-txt fw-bold">BOLETINES MENSUALES DE CLASIFICACION ARANCELARIA <br /><FontAwesomeIcon icon={faNewspaper}  className='fa-3x color-icon py-2'/> </li>
        </ul>
        <div className='card mt-3 border-start-0 border-end-0  border-secondary  rounded-0 border-secondary border-opacity-50'>
          <div className='card-body'>
            <h5 className='card-title  color-txt'>SESIONES MENSUALES DEL CONSEJO DE PERITOS</h5>
            <p className='cart-text text-justify'> Nuestro consejo sesiona el segundo jueves de cada mes, para someter a estudio los productos con el fin de emitir una opinión de fracción arancelaria y del NICO correspondiente

              En cada sesión, se emiten recomendaciones acerca de la clasificación de mercancías y de la metodología que se debe realizar en el proceso de la designación de fracciones arancelarias, con la finalidad de unificar los criterios de clasificación arancelaria de las mercancías que generan duda o diferencias incluso con las propias autoridades aduaneras.

              Adicionalmente, formulamos y presentamos consultas, propuestas y solicitudes ante las autoridades relacionadas con la clasificación arancelaria, con el fin de obtener los posicionamientos, criterios e interpretaciones de las autoridades en total apego a la metodología arancelaria y a las disposiciones legales de las Reglas Generales y de las Complementarias
              Se analizan los criterios de las autoridades mexicanas, discrepancias entre las empresas y los agentes aduanales, así como aquellas decisiones arbitrarias por parte de la autoridad, y de esta forma emitimos recomendaciones ante la presentación de incidencias en los procesos de importación /exportación.</p>
            <a href="/Contact" class="btn btn-outline-secondary w-100">Pedir informes</a>
          </div>
        </div>
        <div className='card mt-3  border-start-0 border-end-0 border-primary rounded-0  border-secondary border-opacity-50'>
          <div className='card-body'>
            <h5 className='card-title color-txt'>CONSULTA DE MINUTAS DE LAS REUNIONES DEL CONSEJO</h5>
            <p className='cart-text text-justify'>En cada sesión, se elabora la minuta con las recomendaciones y resultados emanados del consejo de peritos, debidamente fundamentados conforme a los lineamientos en materia de clasificación arancelaria.</p>
          </div>
        </div>
        <div className='card mt-3 border-start-0 border-end-0  rounded-0 border-primary border-secondary border-opacity-50'>
          <div className='card-body'>
            <h5 className='card-title color-txt'>BOLETINES MENSUALES DE CLASIFICACION ARANCELARIA</h5>
            <p className='cart-text text-justify'>Los boletines contienen la información de las discrepancias de criterios, la aplicación e interpretación de los textos de las Reglas Generales y Complementarias, textos de las notas legales, notas nacionales, también encontraran recomendaciones de relevancia para la correcta clasificación de mercancías, en su caso, comunicados y publicaciones en el Diario Oficial de la Federación de relevancia.</p>
          </div>
        </div>
      </div> 
      <div class="container  mt-5">
    <div class="card container border p-5 my-5 bg-light shadow-lg rounded  bg-light">
      <div class="card-body">
        <h2  class="card-title text-center mt-3 color-txt  pb-3">Ligas de interes</h2>

        <div class="d-flex flex-wrap justify-content-center">
          <div class="p-2">
            <a href="https://www.dof.gob.mx"><button type="button" class="btn btn-outline-primary btn-lg btn-block">DOF</button></a>
          </div>
          <div class="p-2">
            <a href="https://www.snice.gob.mx/"><button type="button" class="btn btn-outline-primary btn-lg btn-block">SNICE</button></a>
          </div>
          <div class="p-2">
            <a href="https://www.anam.gob.mx/"><button type="button" class="btn btn-outline-primary btn-lg btn-block">ANAM</button></a>
          </div>
          <div class="p-2">
            <a href="https://www.gob.mx/cofepris"><button type="button" class="btn btn-outline-primary btn-lg btn-block">COFEPRIS</button></a>
          </div>
          <div class="p-2">
           <a href="https://www.sat.gob.mx/personas/comercio-exterior"><button type="button" class="btn btn-outline-primary btn-lg btn-block">SAT</button></a> 
          </div>
          <div class="p-2">
           <a href="https://www.ventanillaunica.gob.mx/vucem/index.html"><button type="button" class="btn btn-outline-primary btn-lg btn-block">VUCEM</button></a> 
          </div>
          <div class="p-2">
           <a href="https://www.snice.gob.mx/cs/avi/snice/biblioteca.juridica.html"><button type="button" class="btn btn-outline-primary btn-lg btn-block">Biblioteca SNICE</button></a> 
          </div>
          <div class="p-2">
            <a href="https://web.diputados.gob.mx/inicio"><button type="button" class="btn btn-outline-primary btn-lg btn-block">CAMARA DE DIPUTADOS</button></a>
          </div>
        </div>
      </div>
    </div>
  </div>

      
      <Footer />
    </div>
  )
}

export default Services