import React from 'react';

const ProductPage = ({ addToCart, wineData }) => { 
  const handleAddToCart = (wine) => {
    addToCart(wine);
  };

  return (
    <div className="product-container">
      <h2>Shop Wines</h2>
      <br></br>
      <br></br>
      <br></br>
      <div className="products">
        {wineData.map((wine) => (
          <div key={wine.name} className="product">
            <img
              src={process.env.PUBLIC_URL + `/${wine.image}`}
              alt={wine.name}
              className="product-image"
            />
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

export default ProductPage;








