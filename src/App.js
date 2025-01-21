import React from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Interests from './components/Interests';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImage from './images/profile.jpg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
        <header className="App-header">
            <img src={profileImage} alt="Amrutha Varshini" className="hero-image" />

            <h1>Amrutha Varshini Alur</h1>
            <p>Bioinformatics Researcher and Computer Scientist</p>
            {/* Navigation links for smooth scrolling */}
            <nav>
            <ul>
                <li><a href="#aboutMe">About</a></li>
                <li><a href="#myProjects">Projects</a></li>
                <li><a href="#mySkills">Skills</a></li>
                <li><a href="#myExperiences">Experiences</a></li>
                <li><a href="#myInterests">Interests</a></li>
            </ul>
            </nav>
        </header>
        <main>
            <section id="aboutMe">
            <About />
            </section>
            <section id="myProjects">
            <Projects />
            </section>
            <section id="mySkills">
            <Skills />
            </section>
            <section id="myExperiences">
            <Experiences />
            </section>
            <section id="myInterests">
            <Interests />
            </section>
        </main>
        <footer>
            <p>Made with love by Amrutha Varshini Alur</p>
            <div className="social-icons">
            <a href="https://github.com/amrutha-varshini-alur" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/amrutha-varshini-alur/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            </div>
        </footer>
        </div>
    </Router>
  );
}

export default App;
