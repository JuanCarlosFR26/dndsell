import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Qué ofrecemos</h5>
      <h2>Servicios</h2>

      <div className='container services_container'>
        <article className='service'>
          <div className='service_head'>
            <h3>DnD clásico</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Manuales de juegos</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Explicación de sistema de juego</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Consejos y técnicas</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Cómo ambientarlo todo</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className='service'>
          <div className='service_head'>
            <h3>Creamos historias</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creamos una campaña completa según tu temática con tus personajes y actos</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Te diseñamos el sistema de juego</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Documentamos los pasos que tienes que seguir y las posibilidades existentes</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Creamos los NPCs del juego y sus diálogos</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Aseguramos diversión total</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className='service'>
          <div className='service_head'>
            <h3>Compra nuestro contenido</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Campañas comlpetas de rol</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Partidas pensadas para unas horas</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Con razas conocidas, nuevas y nuestras propias clases</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Aventuras de terror, ficción, fantasía, realistas, etc</p>
            </li>
            <li>
              <BiCheck className='service_list-icon'/>
              <p>Prueba nuestros hechizos y habilidades</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services