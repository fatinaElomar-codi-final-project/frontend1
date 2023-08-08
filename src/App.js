import { Menu } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DishCard from "./components/Order/order";
import Menupage from "./components/Menu/Menu";
import DashboardLayout from "./components/layout_menu/dashboard_header";
// import TabBar from "./components/tabBar/tabBar";
import TableDishs from "./pages/dashboard/dishs_dashboard";
import Login from "./pages/login/login";
import Admin from "./route/admin";
import Visitor from "./route/visitor";
import Home from "./pages/home/home";
import ArrivalhomePage from "./components/newdishes/newdishs";
import Order from "./components/Order/order";
import Newdishs from "./components/newdishes/newdishs";
import Aboutuspage from "./pages/aboutuspage/aboutuspage";
import OrderCard from "./components/Order/orderCard";
import Cartpage from "./pages/cartpage/cartpage";
import ProductCarouselComponent from "./components/product-carousal/products_carousel";
// import OrdersList from "./pages/home/showorder/showorder";
function App() {
  return (
    <Routes>
              <Route path="/login" element={<Login />} />

      <Route path="/Newdishs" component={<Newdishs />} />
      <Route path="/cartpage" element={<Cartpage />} />
      <Route path="/productcarousel" element={<ProductCarouselComponent />} />
      // <Route path="/listorder" element={<OrdersList/>} />

      
      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/dishtable" element={<TableDishs />} />
        <Route path="/admin/dashboard" element={<DashboardLayout />} />
        <Route path="/admin/listorder" element={<OrdersList/>} />

      </Route>

      <Route path="/" element={<Visitor />}>
        <Route path="/cart" element={<Order />} />

        <Route path="/aboutuspage" element={<Aboutuspage />} />
        <Route path="/Drinks" element={<OrderCard category="Drinks" />} />
        <Route path="/" element={<Home />} />
        <Route path="/tab" element={<Menupage />} />
        <Route path="/dish" element={<DishCard />} />
        <Route path="/scroll" element={<ArrivalhomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
