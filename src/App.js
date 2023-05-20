import { Menu } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DishCard from "./components/dishes/dishes";
import Menupage from "./components/Menu/Menu";
import DashboardLayout from "./components/layout_menu/dashboard_header";
import OrderForm from "./components/order/order";
// import TabBar from "./components/tabBar/tabBar";
import TableDishs from "./pages/dashboard/dishs_dashboard";
import Login from "./pages/login/login";
import Admin from "./route/admin";
import Visitor from "./route/visitor";

function App() {
  return (
    <Routes>
 <Route path="/dashboard" element={<DashboardLayout />} >
      </Route>

      <Route path="/tab" element={<Menupage />} />
     

      <Route path="/dishtable" element={<TableDishs />}></Route>
      <Route path="/dish" element={<DishCard />}></Route>
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Visitor />} />
    </Routes>
  );
}

export default App;
