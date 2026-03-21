import React from 'react';
import lady from "../About/image_about.png";
import heart from "../../Assets/pink_heart.png";
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">

      <div className="about-title">
        <br /><br />
        <h1>
            <img src={heart} alt="heart" className="heart-icon" />
                ¿Quién soy?
            <img src={heart} alt="heart" className="heart-icon" />
        </h1>
      </div>

      <div className="about-row">

        <div className="about-text">
          <p className="about-intro">Hola! Mi nombre es Caro 💖</p>

          <p>
            Soy estudiante de Ingeniería en Sistemas en la UTN, y me recibí como Técnica en Informática. 
            También me formé como desarrolladora web Full Stack.
          </p>

          <p>
            Me gusta crear experiencias digitales que no solo se vean bien y funcionen bien, sino que también 
            tengan una identidad única que permita alcanzar el mayor impacto y representación de tu marca.
          </p>

          <p>
            Disfruto seguir aprendiendo, trabajar con otras personas y transformar ideas en proyectos reales 
            que conecten con el usuario✨
          </p>
        </div>

        <div className="about-image">
          <img src={lady} alt="about" className="about-img" />
        </div>

      </div>

    </section>
  );
};

export default About;