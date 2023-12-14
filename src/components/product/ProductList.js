import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ wineData, addToCart }) => {
  const navigate = useNavigate();

  const handleViewDetails = (wineId) => {
    // Navigate to the product details page
    navigate(`/product/${wineId}`);
  };

  return (
    <div>
      <h2>Wine Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wineData.map((wine) => (
            <tr key={wine.id}>
              <td>{wine.id}</td>
              <td>{wine.name}</td>
              <td>{wine.type}</td>
              <td>${Number(wine.price).toFixed(2)}</td>
              <td>
                <button onClick={() => addToCart(wine)}>Add to Cart</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;


/*               <button onClick={() => handleViewDetails(wine.id)}>View Details</button>
*/