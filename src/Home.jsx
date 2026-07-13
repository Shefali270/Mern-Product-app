import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  

  const [products, setProducts] = useState(() => {
    const savedProducts = JSON.parse(localStorage.getItem("products"));

    if (savedProducts && savedProducts.length > 0) {
      return savedProducts;
    }

    const defaultProducts = [
      {
        id: 1,
        image: "https://via.placeholder.com/150",
        name: "Mobile",
        price: "₹15000",
        description: "Smartphone with good features",
        liked: false,
      },


      {
        id: 2,
        image: "https://via.placeholder.com/150",
        name: "Laptop",
        price: "₹50000",
        description: "Laptop for coding and work",
        liked: false,
      },


    ];

    localStorage.setItem("products", JSON.stringify(defaultProducts));
    return defaultProducts;
  });

  const handleLike = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, liked: !product.liked }
        : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const handleEdit = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        const newName = prompt("Enter Product Name", product.name);
        const newPrice = prompt("Enter Product Price", product.price);
        const newImage = prompt("Enter Image URL", product.image);
        const newDescription = prompt("Enter Description", product.description);



        return {
          ...product,
          name: newName,
          price: newPrice,
          image: newImage,
          description: newDescription,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <div className="home-container">

      <div className="header">

        <button onClick={() => navigate("/add-product")}>
          Add Product
        </button>

        <button onClick={() => navigate("/liked-products")}>
          Liked Products
        </button>

        <button onClick={() => navigate("/profile")}>
          Profile
        </button>
      </div>

      <h1 className="title">Product Home Page</h1>

      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h2>{product.name}</h2>

            <h3>{product.price}</h3>

            <p>{product.description}</p>


            <button onClick={() => handleLike(product.id)}>
              {product.liked ? "❤️ Liked" : "🤍 Like"}
            </button>

            <button onClick={() => handleEdit(product.id)}>
              Edit
            </button>

          </div>
        ))}
      </div>


    </div>
  );
};


export default Home;