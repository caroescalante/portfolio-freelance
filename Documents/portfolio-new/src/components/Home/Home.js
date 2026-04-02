import React from 'react';
import '../Home/Home.css';
import compu from "../../Assets/computadora_home.png";

const Home = () => {
  return (
    <section className="home-section" id="home">

      <h2 className="hero-role">
        web designer and developer
      </h2>

      <div className="hero-title">
        <span className="hero-port">PORT</span>
        <br/>
        <span className="hero-folio">FOLIO</span>
      </div>


      <div className="hero-image">
        <img src={compu} alt="computadora" />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-name">
          <span className="name-carolina">Carolina</span>
          <br />
          <span className="name-escalante">Escalante</span>
        </h1>

      </div>
      
      <div className="btn-conoceme-container">
        <button 
          className="btn-conoceme"
          onClick={() => {
            document.getElementById("about").scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          CONOCEME
        </button>
      </div>

    </section>
  );
};

export default Home;