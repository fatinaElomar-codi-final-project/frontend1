import { Outlet, Route } from "react-router-dom";
import DashboardLayout from "../components/layout_menu/dashboard_header";
import Sidebar from "../components/layout_menu/sidebar";
import Dashboard from "../pages/dashboard/dashboard";
import Dish from "../pages/dashboard/dishs_dashboard";

function Admin() {
  return (
    <>
    
     



     <DashboardLayout/>
     <Outlet/>
    </>
  );
}
export default Admin;
