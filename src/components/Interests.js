import React from 'react';
import './Interests.css';

const Interests = () => {
  return (
    <section className="interests-section">
      <h2>My Interests</h2>
      <p>
        I spend most of my time outdoors because, let's face it, data isn't the only thing that needs exploring! I love traveling, not just to new places, but also to new perspectives and, of course, finding the best local food.
      </p>
      <p>
        When I'm not globe-trotting or building my social network, you'll find me on the badminton court, perfecting my serve – or glued to the latest science tech breakthroughs, because who doesn't love a little geeky fun on the side.
      </p>
      <div className="interest-list">
        <ul>
          <li>Traveling</li>
          <li>Exploring local cuisines</li>
          <li>Badminton</li>
          <li>Science and technology breakthroughs</li>
        </ul>
      </div>
    </section>
  );
};

export default Interests;
