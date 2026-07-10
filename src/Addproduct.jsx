import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
     const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");   

const handleAddProduct = () => {
  if (
    name === "" ||
    price === "" ||
    image === "" ||
    description === ""
  ) {
    setError("Please fill all fields");
    return;
  }

  const newProduct = {
    id: Date.now(),
    name,
    price,
    image,
    description,
    liked: false,
  };

  const oldProducts = JSON.parse(localStorage.getItem("products")) || [];

  oldProducts.push(newProduct);

  localStorage.setItem("products", JSON.stringify(oldProducts));
  alert(JSON.stringify(oldProducts));
 

  alert("Product Added Successfully");
  
  navigate("/home");
};
    return(
        <div>
            <h1>Add Product</h1>
            <label>Product Name</label>
            <input
              
              type="text"
              placeholder="Enter Product Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            
            />
            <br/><br/>

            <label>price</label>
            <input
              type = "text"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            
            />

            <br/><br/>

            <label>Image URL</label>
            <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />

             <br/><br/>
             
             <label>Description</label>
             <input 
              type = "text"
              placeholder="Enter Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br/><br/>
        
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button onClick={handleAddProduct}>
                Add product
            </button>
            
        </div>
    );

};

export default AddProduct; 