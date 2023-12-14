import React from 'react';

const Home = ({ isHomePage }) => {
  return (
    <div
      className="container-fluid vh-100 embed-responsive embed-responsive-16by9"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/homepage.gif)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <div className="image-container">
        <img
          src={process.env.PUBLIC_URL + '/logo no.png'}
          alt="logo"
          className="image"
        />
      </div>
      <div className="content-container text-light">
        {isHomePage && (
          <div style={{ textAlign: 'left' }}>
            <h2>Welcome to Wine Whirl!!!</h2>
            <p>Welcome</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

