import { Outlet, Route } from "react-router-dom";
import DashboardLayout from "../components/layout_menu/dashboard_header";
import Dashboard from "../pages/dashboard/dashboard";
import Dish from "../pages/dashboard/dishs_dashboard";

function Admin() {
  return (
    <>
      <Route
        path="/admin"
        element={
          <DashboardLayout>
            < Dish/>
            <Outlet />
          </DashboardLayout>
        }
      >
      <Route path="/table" element={<Dish />} />



      </Route>
    </>
  );
}
export default Admin;
