import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const FormsContact=() =>{
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
    return (
        <div class="container border p-5 my-4 bg-light shadow-lg rounded">
            <div class="row justify-content-center">
                <div class="col-md-7">
                <form ref={form} onSubmit={sendEmail} className='field'>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label p-1 ">Nombre Completo</label>
                <input type="text" name="user_name" class="form-control" id="exampleFormControlInput1" placeholder="Escribe tu Nombre Completo"/>
    </div>
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label p-1 ">Email
                    </label>
                        <input   input type="email" name="user_email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ></input> 
                     <div id="emailHelp" class="form-text">Escribe tu correo electronico de contacto</div>
                        </div>

                        <div class="input-group mb-3">
                            <span class="input-group-text p-1" id="inputGroup-sizing-default">Escribe tu numero de telefono</span>
                                <input type="tel"   name="user_phone" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="xx xxxx xxxx"/>
                            </div>
                        <div class="form-floating">
                       
                                <textarea name="message" class="form-control "  placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                                <label for="floatingTextarea">Escribe la problematica</label>
    </div>
    <div class="d-grid gap-2 p-5">
    <button type="submit" class="btn btn-outline-secondary" value="send">Enviar</button>
    </div>
    
      </form>
                </div>
            </div>
        </div>
    )
};



export default FormsContact