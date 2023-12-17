import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Sidebar from "./Sidebar";
import Header from './Header';

const WomenClothingPage = () => {
    const [product, setProduct] = useState([]);
    
    const fetchData = async () => {
      
      const data= await fetch("https://fakestoreapi.com/products/category/women's clothing")
      const json = await data.json();
      setProduct(json);
    };
    useEffect(() => {
      fetchData();
    }, []);
    
  
    return (
      <div>
        <Header/>  
        <div className="flex flex-col gap-2 shadow-lg p-4 items-center text-center">
          <h1 className="text-6xl">Discover Our Products</h1>
          <p>This is our product page, pick something for yourselves!!!</p>
        </div>
        
        <div className="flex">
          <Sidebar/>
          <div className="flex flex-wrap    ">
            {product.map(({  title, id, image, price}) => {
              return (
                <ProductCard key={id} title={title} id={id} image={image} price={price}/>
              );
            })}
          </div>
        </div>
      </div>
    );
}

export default WomenClothingPage