import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CatalogItem from "./pages/CatalogItem/CatalogItem";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogItem />} />
      </Routes>
    </div>
  );
}

export default App;
