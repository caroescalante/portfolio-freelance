import React from "react";
import './Contact.css';
import mono from "../../Assets/mono.png";

const Contact = () => {
    return (
        <section className="contact-section" id="contacto">
           <br /><br />
            <h1 className="title-contacto">
                <img src={mono} alt="mono" className="mono-icon" />
                    Trabajamos juntos?
                <img src={mono} alt="mono" className="mono-icon" />
            </h1>
            < br />< br />

            <p className="info-contact">
                Todas tus ideas de diseño y estetica de tu marca se van a ver plasmadas en tu sitio Web 
            </p>
            <p className="info-contact">
                Pedime un presupuesto sin compromiso, y te voy a estar respondiendo a la brevedad!
            </p>

            <br/>

            <p className="info-contact">
                Whatsapp: +54 9 11 3946 7266
            </p>
            <p className="info-contact">
                Email: cm.escalante59@gmail.com 
            </p>
            <p className="info-contact">
                Linkedln: <a href="https://www.linkedin.com/in/carolina-escalante-548888201" target="_blank" rel="noopener noreferrer">Carolina Escalante</a>
            </p>
            <p className="info-contact">
                Instagram: @_caroescalante_
            </p>
        </section>
    );
}

export default Contact;