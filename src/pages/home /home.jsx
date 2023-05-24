import React, { useEffect } from "react";
import Aboutus from "../../components/about us/about us.jsx";
import Footer from "../../components/footer/footer.jsx";
import Hero from "../../components/hero/hero.jsx";
import Nav from "../../components/navBar/navbar";
import NewdishSlider from "../../components/newdishes/newdishs";
import Services from "../../components/services/services";
import "./home.css";

export default function Home() {


  return (
    <>
          <header>
          <Nav />
        </header>
        <Hero />
  <main className="home-main">  
        {/* <Services /> */}
        <NewdishSlider />
      <Aboutus />
      </main>
     
        
      <footer>
        <Footer />
      </footer>
    </>
  );
}
