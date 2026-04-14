import React from 'react';
import './Projects.css';
import henryGameZone from "../../Assets/henry_game_zone.png";
import pokemons from "../../Assets/pokemon_landing.png";
import rv from "../../Assets/rv_landing.png";
import tarot from "../../Assets/tarot_landing.png";
import { Col, Row, Container } from "react-bootstrap";
import ProjectCard from "./ProjectCards.js";

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <br /><br /><br />
            <h1 className='title'> Algunos de mis trabajos ...</h1>

            <div>
                <Container>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={rv}
                        isBlog={false}
                        title="RV SOLUTIONS Landing"
                        description="Landing de 3 secciones diseñada y pensada para darle al usuario una introduccion a la empresa, y sentido de confianza para contratar sus servicios."
                        ghLink="https://github.com/caroescalante/RV-WebC"
                        demoLink="https://rv-web-c.vercel.app/"              
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={tarot}
                        isBlog={false}
                        title="Tarot Landing"
                        description="Landing base con la informacion completa de todos los servicios que brinda la especilista. 
                            Formulario para sacar turnos, redireccionamiento directo a Whatsapp."
                        ghLink="https://github.com/caroescalante/tarot-web"
                        demoLink="https://tarot-web-alpha.vercel.app/"              
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3}  className="project-card">
                        <ProjectCard
                        imgPath={henryGameZone}
                        isBlog={false}
                        title="Henry Game-Zone"
                        description="E-commerce de videojuegos, medios de pago integrados, cards individuales con descripcion y video trailer,
                         carrito de compras, favoritos, perfil personalizable y más!"
                        ghLink="https://github.com/caroescalante/PF-Henry-GameZone-1"
                        demoLink="https://pf-henry-game-zone-1.vercel.app/"
                        />
                    </Col>

                    <Col xs={12} sm={6} md={3} className="project-card">
                        <ProjectCard
                        imgPath={pokemons}
                        isBlog={false}
                        title="Pokemons"
                        description="Web donde podrás crear tu propio pokemon, asignarlo a una casa,
                            ver el detalle, editarlos, eliminarlos, filtrarlos 
                            y navegar a traves de todas las casas."
                        ghLink="https://github.com/caroescalante/PI-Pokemons"
                        demoLink="https://pi-pokemons-rose.vercel.app/"
                        />
                    </Col>

                    
                </Row>
                </Container> 
            </div>
        </section>

    );
}

export default Projects;