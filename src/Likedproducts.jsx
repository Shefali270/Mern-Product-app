import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LikedProducts.css";

const LikedProducts = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products")) || []
  );

  const likedProducts = products.filter((product) => product.liked);

  const handleUnlike = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, liked: false }
        : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (

    <div className="liked-container">
      <button onClick={() => navigate("/home")}>
        Back to Home
      </button>

      <h1 className="liked-title">
        Liked Products ({likedProducts.length})
      </h1>

      {likedProducts.length === 0 ? (
        <h2>No Liked Products</h2>
      ) : (

        <div className="liked-list">
          {likedProducts.map((product) => (
            <div className="liked-card" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
              />

              <h2>{product.name}</h2>

              <h3>{product.price}</h3>

              <p>{product.description}</p>

              <button onClick={() => handleUnlike(product.id)}>
                ❤️ Unlike


              </button>

            </div>

          ))}
      
        </div>
      )}
    </div>
  );
};


export default LikedProducts;