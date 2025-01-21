import React, { useEffect, useRef } from 'react';
import './Experiences.css'; // Import the Experience section CSS

const Experience = () => {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          experienceRef.current.classList.add('show');
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(experienceRef.current);
  }, []);

  return (
    <div className="experience-section" ref={experienceRef}>
      <h2>My Experiences</h2>

      <div className="experience-item">
        <h3>Volunteer Bioinformatics Researcher</h3>
        <p><strong>Ohio University | October 2024 - Present</strong></p>
        <ul>
          <li>Developed and implemented an innovative pipeline for motif pair analysis, utilizing RNA-seq data for gene expression level analysis to identify and filter transcription factors, enabling precise selection for motif pair analysis. This approach improved the accuracy of downstream multi-omics analyses and supported key discoveries in genomics research.</li>
          <li>Adopted best practices for coding and pipeline development, combining bioinformatics tools with machine learning models in Unix-like environments, resulting in improved accuracy and reliability of genomics data analysis.</li>
          <li>Created interactive visualizations to effectively communicate complex findings, aiding in stakeholder engagement and enhancing understanding of research outcomes.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Graduate Assistant</h3>
        <p><strong>Ohio University | January 2022 – August 2024</strong></p>
        <ul>
          <li>Utilized Python to develop and maintain scripts for data preprocessing and analysis for Next Generation Sequencing (NGS) data, including RNA-seq, ATAC-seq, DNase-seq, ChIP-seq, and Hi-C, boosting workflow efficiency and ensuring dataset reproducibility.</li>
          <li>Assisted in testing, troubleshooting issues, and optimizing ML data pipelines for genomic analyses, refining data accuracy and accelerating lab project timelines for research and development.</li>
          <li>Collaborated with cross-functional research teams in a fast-paced environment to integrate bioinformatics tools, leveraging skills in genomics and data integration, which improved access to computational resources for research.</li>
          <li>Provided technical support and customer service for software installations and updates, promoting consistent access to critical analysis tools and reducing downtime through effective version control practices (Git) and documentation.</li>
        </ul>
      </div>

      <div className="experience-item">
        <h3>Senior Software Engineer</h3>
        <p><strong>Accenture Solutions Pvt Ltd | December 2018 – December 2021</strong></p>
        <ul>
          <li>Developed backend solutions for web applications using Python, contributing to the enhancement of overall system performance and scalability, resulting in a 30% increase in processing speed.</li>
          <li>Optimized software coding practices by refactoring and utilizing modular approaches, reducing code complexity and improving maintainability, which led to a 15% decrease in the occurrence of runtime errors.</li>
          <li>Collaborated closely with product teams to define requirements and design solutions, aligning software features with business objectives and enhancing product functionality by 20%.</li>
          <li>Created and maintained Python scripting solutions to automate testing of different functionalities in web applications, reducing manual testing time by 50% and ensuring best practices in deployment.</li>
          <li>Implemented agile and scrum methodologies for software development, and test-driven development practices across projects, leading to a 20% reduction in bugs and a faster release cycle, improving the overall productivity of the team.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
