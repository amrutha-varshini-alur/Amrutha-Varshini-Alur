import React, { useEffect, useRef } from 'react';
import './About.css'; // Import the About section CSS

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          aboutRef.current.classList.add('show');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(aboutRef.current);
  }, []);

  return (
    <div className="about-section" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I am a bioinformatics researcher and computer scientist with a focus on genomics and data science. I hold a Master's degree from Ohio University, where I specialized in developing data-driven pipelines for genomic analysis and integrating machine learning models to enhance accuracy and efficiency. With expertise in RNA-seq, 3D genome architecture, and cancer prediction models, I am passionate about using computational tools to solve complex biological challenges. I am committed to advancing research through innovative solutions and impactful data analysis, always looking for ways to push the boundaries of what's possible in genomics.
      </p>
    </div>
  );
};

export default About;
