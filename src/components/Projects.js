import React, { useEffect, useRef } from 'react';
import './Project.css'; // Import the Project section CSS

const Projects = () => {
  const projectRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projectRef.current.classList.add('show');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(projectRef.current);
  }, []);

  return (
    <div className="projects-section" ref={projectRef}>
      <h2>My Projects</h2>

      <div className="project-card">
        <div className="project-info">
          <h3>Pipeline for Motif Pair Analysis</h3>
          <p><strong>Tech Stack:</strong> Python, Linux, RESTful APIs</p>
          <ul>
            <li>Contributed to the development and implementation of a bioinformatics pipeline for motif pair analysis using RNA-seq data, conducting gene expression analysis to filter transcription factors and enable high-confidence motif detection.</li>
            <li>Automated multiple steps in the pipeline, including the mapping of Ensembl IDs to gene symbols using RESTful APIs, streamlining the transcription factor selection process and enhancing overall workflow efficiency.</li>
            <li>Enhanced downstream multi-omics analyses by improving the accuracy and reliability of motif detection workflows.</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <div className="project-info">
          <h3>Analyzing 3D Genome Architecture with Machine Learning</h3>
          <p><strong>Tech Stack:</strong> Python, Linux</p>
          <ul>
            <li>Designed and implemented a pipeline for analyzing 3D genome structure using Genome Architecture Mapping data.</li>
            <li>Applied dimensionality reduction and clustering techniques to classify chromatin structure variations, achieving 93% accuracy across three cell types.</li>
            <li>Validated findings through integration of experimental and computational data, contributing to significant discoveries in genome architecture.</li>
          </ul>
        </div>
      </div>

      <div className="project-card">
        <div className="project-info">
          <h3>High-Precision Cancer Type Prediction with Machine Learning</h3>
          <p><strong>Tech Stack:</strong> Python</p>
          <ul>
            <li>Developed a supervised learning pipeline to classify cancer types using large-scale genomic datasets.</li>
            <li>Built a high-precision random forest model and conducted feature importance analysis to identify key genetic markers, improving model efficiency and interpretability.</li>
            <li>Optimized hyperparameters to enhance workflow efficiency and reduce processing time.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
