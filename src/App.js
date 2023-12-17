
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Home from "./components/Home";
import JeweleryPage from "./components/JeweleryPage";
import ElectronicsPage from "./components/ElectronicsPage";
import MenClothingPage from "./components/MenClothingPage";
import WomenClothingPage from "./components/WomenClothingPage";
import RatingMin from "./components/RatingMin";
import RatingMid from "./components/RatingMid";
import RatingMax from "./components/RatingMax";
import PriceMin from "./components/PriceMin";
import PriceMid from "./components/PriceMid";
import PriceMax from "./components/PriceMax";

function App() {
  return (
    <div className="" >
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/jewelery" element={<JeweleryPage/>}></Route>
          <Route path="/electronics" element={<ElectronicsPage/>}></Route>
          <Route path="/mencloth" element={<MenClothingPage/>}></Route>
          <Route path="/womencloth" element={<WomenClothingPage/>}></Route>
          <Route path="/minrate" element={<RatingMin/>}></Route>
          <Route path="/midrate" element={<RatingMid/>}></Route>
          <Route path="/maxrate" element={<RatingMax/>}></Route>
          <Route path="/minprice" element={<PriceMin/>}></Route>
          <Route path="/midprice" element={<PriceMid/>}></Route>
          <Route path="/maxrate" element={<PriceMax/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
