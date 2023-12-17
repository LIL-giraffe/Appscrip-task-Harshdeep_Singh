import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({  title, id, image, price,rating }) => {
  
  const [toggle, setToggle] = useState(true);
  const handleToggle = (e) => {
    setToggle(!toggle);
  };
  return (
    <div className=" w-[200px] rounded-lg p-2 mb-4  ml-32 bg-slate-800 text-white mt-3 mr-2" key={id}>
      <img
        src={image}
        className=" object-contain rounded-xlg h-[320px]   "
        alt={id}
      />
      <div className="flex justify-between gap-2">
        <div className="flex flex-col gap-2 ">
          <span className="font-bold">{title}</span>
          <span>$ {price}</span>
        </div>
        <div>
          <button onClick={handleToggle}>
            {toggle ? (
              <FavoriteBorderIcon />
            ) : (
              <FavoriteBorderIcon style={{ color: "red" }} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
