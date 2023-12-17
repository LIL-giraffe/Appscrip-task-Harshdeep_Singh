import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Content = () => {
  
  const [product, setProduct] = useState([]);
//   const [show,setShow]=useState(true)
  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    
    const json = await data.json();
    setProduct(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  
  

  return (
    <div>
      <div className="flex flex-col gap-2 shadow-lg p-6 items-center text-center">
        <h1 className="text-6xl">Discover Our Products</h1>
        <p className="text-l">This is our product page, pick something for yourselves!!!</p>
      </div>
      
      <div className="flex">
        <Sidebar/>
        <div className="flex flex-wrap  justify-end  ">
          {product.map(({  title, id, image, price,rating}) => {
            return (
              <ProductCard key={id} title={title} id={id} image={image} price={price} rating={rating.rate}/>
            );
          })}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Content;
