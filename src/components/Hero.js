// import React from 'react';
// import './Hero.css'; // Add your CSS in this file

// const Hero = () => {
//   return (
//     <div className="hero-section">
//       <div className="hero-text">
//         <h1>Amrutha Varshini Alur</h1>
//         <p>Bioinformatics Researcher and Computer Scientist.</p>
//         <button className="cta-button">Learn More</button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from 'react';
import './Hero.css'; // Add your CSS in this file
import profilePic from '../assets/your-profile-picture.jpg'; // Replace with the path to your image

const Hero = () => {
  const handleLearnMoreClick = () => {
    // Scroll to the About section when the button is clicked
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-section">
      <div className="hero-text">
        <img src={profilePic} alt="Amrutha Varshini Alur" className="profile-picture" />
        <h1>Amrutha Varshini Alur</h1>
        <p>Bioinformatics Researcher and Computer Scientist</p>
        <button className="cta-button" onClick={handleLearnMoreClick}>
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
