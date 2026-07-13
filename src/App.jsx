import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Signup from "./Signup";
import AddProduct from "./AddProduct";
import LikedProducts from "./LikedProducts";
import Profile from "./Profile";

function App() {
  return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
          <Route path="/add-product" element={<AddProduct />} />
        <Route path="/liked-products" element={<LikedProducts />} />    
        <Route path="/profile" element={<Profile />} />

        </Routes>

    </BrowserRouter>
    
  );
}

export default App; 