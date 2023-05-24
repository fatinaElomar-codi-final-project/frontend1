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
import ShoppingCart from "./components/dishes/shoppingcar";
import Cart from "./components/dishes/defaultcart";

function App() {
  return (
    <Routes>
            <Route path="/login" element={<Login />} />

       <Route path="/admin" element={<Admin />}>
       <Route path="/admin/dishtable" element={<TableDishs />}/>

     
 <Route path="/admin/dashboard" element={<DashboardLayout />} />
     </Route>
      <Route path="/" element={<Visitor />} >
      <Route path="/tab" element={<Menupage />} />
      <Route path="/cart" element={<Cart />} />

<Route path="/cartorder" element={<ShoppingCart/>}/>
     
      <Route path="/dish" element={<DishCard />}></Route>
   
   </Route>
    </Routes>
  );
}

export default App;
