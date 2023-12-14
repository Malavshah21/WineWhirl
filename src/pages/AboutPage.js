// About.js
/*import React from 'react';
import quality from './quality.jpg';
import customer from './customer.jpg';
import tradition from './traditional.jpg';
import bannerImage from './banner.jpg';

*/
// About.js
import React from 'react';
//import quality from './quality.jpg';
//import customer from './customer.jpg';
//import tradition from './traditional.jpg';
//import bannerImage from './banner.jpg';


const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="banner">
        <img src="banner.jpg" alt="Banner Image" />
      </div>
      <section className="about-intro">
        <div className="intro-text">
          <h1>About Us</h1>
          <p>
          Our enthusiasm for fine wines drives all we do at Wine Whirl. 
          We think that each bottle tells a unique narrative, and we are committed to bringing 
          the best wines from vineyards all around the world to your door.
          </p>
          <p>
          <br></br>
          <h1>Our Story</h1>
          Wine Whirl was founded by a group of oenophiles who shared a passion for great wines 
          in order to reinvent the way consumers enjoy and appreciate wine. Our quest began with vineyard 
          exploration, cultivating partnerships with expert winemakers, and crafting a selection that highlights 
          the creativity and workmanship behind each bottle.
          </p>
          <p>
          <br></br>
          <h1>Our Purpose</h1>
          Our objective is to bring wine experts and beginners alike the thrill of finding outstanding wines.
          We attempt to provide a selected collection that appeals to a wide range of tastes, ensuring that 
          every consumer finds a bottle that speaks to their tastes. We want to make every wine-buying experience 
          memorable by committing to quality, authenticity, and exceptional service.
          </p>
        </div>
        <div className="intro-image">        
        </div>
      </section>

      <section className="about-values">
        <h2>Our Commitments</h2>
        <br></br>
        <div className="values-grid">
          <div className="value">
          <img src="quality.jpg" alt="Quality" />
            <br></br>
            <p><b>Quality Assurance:</b></p>
            <p> To guarantee that every bottle surpasses your expectations, we rigorously pick wines based on their quality, 
              flavour profiles, and distinctive features.We promote ecologically responsible farms and winemakers that 
              prioritise sustainable grape cultivation and winemaking practises.</p>
          </div>
          <div className="value">
          <img src="customer.jpg" alt="Customer Service" />
            <br></br>
            <p><b>Customer Service:</b></p>
            <p> Customer Satisfaction: We prioritise your satisfaction. We are committed to offering personalised service, 
              experienced advice, and a hassle-free purchasing experience.</p>
          </div>
          <div className="value">
          <img src="traditional.jpg" alt="Tradition" />
            <br></br>
            <p><b>Tradition and Heritage</b></p>
            <p>Our collection celebrates the various legacy of winemaking areas by finding wines that reflect their origins. 
              We work with wineries to preserve and promote their heritage by crafting limited-edition wines. Each bottle tells 
              a story about craftsmanship, culture, and history, providing insight into the tradition and legacy of winemaking.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
