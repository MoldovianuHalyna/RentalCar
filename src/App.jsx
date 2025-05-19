import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalog from "./pages/Catalog/Catalog";
import CatalogItem from "./pages/CatalogItem/CatalogItem";
import NotFound from "./components/NotFoundPage/NotFound";

function App() {
  return (
    <div>
      <div>
        <NavLink to="/">Home Page</NavLink>
        <NavLink to="/catalog"> Catalog </NavLink>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:id" element={<CatalogItem />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
