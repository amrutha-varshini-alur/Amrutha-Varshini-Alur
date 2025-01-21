import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <div className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-category">
        <h3>Programming Languages</h3>
        <p>Python, R, Java, C++, SQL, RESTful API</p>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <p>Git, GitHub, Docker, Snakemake, AWS, Jupyter Notebook, VS Code, MySQL</p>
      </div>

      <div className="skills-category">
        <h3>Workflow</h3>
        <ul>
          <li>Python Programming</li>
          <li>Data Analysis and Visualization</li>
          <li>Machine Learning and Algorithms</li>
          <li>Genomics, Gene Expression, and Gene Ontology</li>
          <li>NGS Data and Network Analysis</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
