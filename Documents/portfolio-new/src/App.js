// import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
// import Servicios from './components/Services/Services.js';
// import Resume from './components/Resume/Resume.js';
import Contacto from './components/Contact/Contact.js';
import './App.css';

function App() {
  return (  
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Projects />
      {/* <Servicios /> */}
      {/* <Resume /> */}
      <Contacto />
    </div>
  );
}


export default App;
