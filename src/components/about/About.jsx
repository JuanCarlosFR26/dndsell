import React from "react";
import './about.css'
import WIZARD from "../../assets/wizardabout.jpg";
import { FaDungeon } from "react-icons/fa";
import { MdOutlineHistoryEdu } from "react-icons/md";
import { FaDiceD20 } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Qué puedes encontrar</h5>
      <h2>Nuestra web</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={WIZARD} alt="wizard"></img>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaDungeon className="about_icon" />
              <h5>Rol DnD</h5>
              <small>Partidas basadas en Dragones y mazmorras</small>
            </article>
            <article className="about_card">
              <MdOutlineHistoryEdu className="about_icon" />
              <h5>Creamos Historias</h5>
              <small>Hacemos las historias según la temática que nos indiques</small>
            </article>
            <article className="about_card">
              <FaDiceD20 className="about_icon" />
              <h5>Historias Nuestras</h5>
              <small>Adquiere nuestros manuales de diferentes temáticas</small>
            </article>
          </div>

          <p>
          En nuestra web, te ofrecemos tres servicios clave: asistencia en partidas de Dnd, creación de historias personalizadas según tu temática preferida y venta de nuestras propias historias de rol Dnd. Nuestro objetivo es brindarte una experiencia inmersiva y emocionante en el mundo del rol, satisfaciendo tus necesidades y deseos de manera única.
          </p>

          <a href="#contact" className="btn btn-primary">
            Haznos una pregunta
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
