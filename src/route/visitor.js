import { Outlet } from "react-router-dom"
import Footer from "../components/footer/footer"
import Nav from "../components/navBar/navbar"
import Home from "../pages/home /home"

function Visitor(){
return(
<>
  <Nav/>
 <Outlet/>
 <Footer/>

    </>
)
}
export default Visitor