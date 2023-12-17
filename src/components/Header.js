import React from "react";
import { useNavigate } from "react-router-dom";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Header = () => {
  const navigate=useNavigate()
  const handleClick=()=>{
     navigate("/")
  }
  return (
    <div className="flex justify-between p-6  shadow-lg">
      <div>
        <h1 onClick={handleClick} className="font-bold cursor-pointer">Logo</h1>
      </div>
      <div className="flex flex-col gap-4 text-center font-bold">
        <h1 className="text-3xl">Logo</h1>

        <ul className="flex gap-2">
          <li className="hover:underline">shop</li>
          <li className="hover:underline">skills</li>
          <li className="hover:underline">stores</li>
          <li className="hover:underline">about</li>
          <li className="hover:underline">contact us</li>
        </ul>
      </div>
      <div className="flex gap-4">
        <h1 className="mr-12">eng</h1>
        <span><FavoriteBorderIcon style={{ color: '#d32f2f' }}/></span>
        <span><LocalMallIcon style={{ color: 'blue' }}/></span>
        <span><AccountBoxIcon/></span>
      </div>
    </div>
  );
};

export default Header;
