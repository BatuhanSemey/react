import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Cart from "../pages/Cart";

export default function AppRoutes({ searchText, cartPizza, setCartPizza }) {
  return (
    <Routes>
      <Route path="/" element={<Home  />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
