import { Outlet } from "react-router-dom"
import Nav from "../components/navBar/navbar"
import Home from "../pages/home /home"

function Visitor(){
return(
    <>
  
    <Outlet/>
    </>
)
}
export default Visitor