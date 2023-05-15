import { Outlet } from "react-router-dom"
import Nav from "../components/navBar/navbar"
import TabBar from "../components/tabBar/tabBar"
import Home from "../pages/home /home"

function Visitor(){
return(
    <>
   <Home/>
    <Outlet/>
    </>
)
}
export default Visitor