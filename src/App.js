import { Route, Routes } from "react-router-dom";
import "./App.css";
import DishCard from "./components/dishes/dishes";
import Menu from "./components/dishes/Menu/Menu";
import Sidebar from "./components/layout_menu/sidebar";
// import TabBar from "./components/tabBar/tabBar";
import TableDishs from "./pages/dashboard/dishs_dashboard";
import Dishs from "./pages/dashboard/dishs_dashboard";
import Login from "./pages/login/login";
import Admin from "./route/admin";
import Visitor from "./route/visitor";

function App() {
  return (
    <Routes>
      <Route path="/dishtable" element={<TableDishs/>}></Route>
      <Route path="/dish" element={<DishCard />}></Route>
      <Route path="/dashboard" element={<Admin />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/table" element={<Dishs />} />
      <Route path="/" element={<Visitor />} />
      {/* <Route path="/tab" element={<TabBar />} /> */}
    </Routes>
  );
}

export default App;
