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
import Home from "./pages/home /home";
import ArrivalhomePage from "./components/newdishes/newdishs";
import Order from "./components/Order/order";
import Newdishs from "./components/newdishes/newdishs";
import Aboutuspage from "./pages/aboutuspage/aboutuspage";
function App() {
  return (
    <Routes>
      <Route path="/Newdishs" component={<Newdishs/>} />

      <Route path="/admin" element={<Admin />}>
        <Route path="/admin/dishtable" element={<TableDishs />} />
        <Route path="/admin/dashboard" element={<DashboardLayout />} />
      </Route>

      <Route path="/" element={<Visitor />}>
      <Route path="/cart" element={<Order />} />
      <Route path="/aboutuspage" element={<Aboutuspage/>} />

        <Route path="/" element={<Home />} />
        <Route path="/tab" element={<Menupage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dish" element={<DishCard />} />
        <Route path="/scroll" element={<ArrivalhomePage />} />
     </Route>
    </Routes>
  );
}

export default App;
