// import React from 'react'
import logofooter from '../images/logo-fcinema.png'
import facebook from "../images/facebookcinema.png";
import instagram from "../images/instagramcinema.png";
import youtube from "../images/youtubecinema.png";

const Footer = () => {
  return (
   <>
   <div className='container-fluid footer py-5 ' >
        <div className="container d-flex align-items-center  justify-content-between flex-wrap  gap-4 text-light footer-mobile ">
            <div className="d-flex  flex-column  gap-2  text-center logo-footer ">
                <img className='img-footer align-item-center' src={logofooter} />
                <div className='social d-flex gap-2 justify-content-center align-item-center'>
                <a href="#">
                <img width={"30px"} src={facebook} />
              </a>
              <a href="#">
                <img width={"30px"} src={instagram} />
              </a>
              <a href="#">
                <img width={"30px"} src={youtube} />
              </a>
                    
                    
                    
                </div>
            </div>
        <div className='bg-footer d-flex flex-column align-self-start bg-footer-info '>
            <h6>PROGRAMACION</h6>
            <span className=''>CARTELERA</span>
            <span className=''>PROXIMAMENTE</span>
            
         </div>
         <div className='bg-footer d-flex flex-column align-self-start bg-footer-info  '>
            <h6>SOBRE CINEMA G3</h6>
            <span className=''>NOSOTROS</span>
            <span className=''>SALAS Y FORMATOS</span>
            <span className=''>TERMINOS Y CONDICIONES</span>
            <span className=''>POLITICA DE PRIVACIDAD</span>
         </div>
         <div className='bg-footer d-flex flex-column align-self-start bg-footer-info  '>
            <h6>INFORMACION</h6>
            <span className=''>CONTACTENOS</span>
            <span className=''>SALAS</span>
            <span className=''>PROMOCIONES</span>
         </div>
        
        </div>




    </div>
    <div className='copy py-3 text-center' >
    TODOS LOS DERECHOS RESERVADOS - PROYECTO FRONTEND GRUPO 3 - TECSUP
    </div>
</>
  )
}

export default Footer