import React from 'react';

const RoseWinePage = ({ wineData, addToCart }) => {
  // Filter the wine data to get only Rose wines
  const roseWines = wineData.filter((wine) => wine.type === 'Rosé');
  console.log('Rose Wine Data:', wineData);
  const handleAddToCart = (wine) => {
    addToCart(wine);
  };

  return (
    <div>
      <h2>Rosé</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="products">
        {roseWines.map((wine) => (
          <div key={wine.name} className="product">
            {/* Display Rose wine details */}
            <img src={process.env.PUBLIC_URL + `/${wine.image}`} alt={wine.name} className="product-image" />
            <div className="product-details">
              <p className="product-name">{wine.name}</p>
              <p className="product-type">{wine.type}</p>
              <p className="product-price">${wine.price}</p>
              <button onClick={() => handleAddToCart(wine)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoseWinePage;
