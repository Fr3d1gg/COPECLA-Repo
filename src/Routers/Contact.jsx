import React from 'react'
import Menu from '../Components/Menu'
import FormsContact from '../Components/FormsContact'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div>
      <Menu />
      <h2 className='h2 text-center mt-5 mb-5 text-uppercase mb-4 fw-bold color-txt '>Formulario de contacto</h2>
      <FormsContact />
      <Footer />
    </div>
  )
}

export default Contact