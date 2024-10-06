import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
//debes de hacer npm i @emailjs/browser
import "./Contacto.css";
const Contacto=() =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2kxergh', 'template_a1l4b7i', form.current, {
          publicKey: 't4xqKWinK-apL_CHK',
        })
        .then(
          (result) => {
            console.log('SUCCESS!');
            alert("Se ha enviado el correo con exito");
          },
          (error) => {
            alert("El correo no pudo enviarse");
            console.log('FAILED...', error.text);
          },
        );
    };
    return ( <form ref={form} onSubmit={sendEmail} className='field'>
        <label>Nombre Completo</label>
        <input type="text" name="user_name" />
        <label>Email de Contacto</label>
        <input type="email" name="user_email" />
        <label>Numero de Contacto *opcional el fomato para introducirlos es (55 6721 7685)</label>
        <input type="tel" pattern="[0-9]{2} [0-9]{4} [0-9]{4}" name="user_phone"  />
        <label>Escribe la problematica </label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>)
};
export default Contacto;