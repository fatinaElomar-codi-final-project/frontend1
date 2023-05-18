import React, { useState, useEffect } from "react";
import Aboutus from "../../components/about us/about us";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/hero";
import Nav from "../../components/navBar/navbar";
import Services from "../../components/services/services";
import "./home.css";

export default function Home() {

  return (
    <>
          <main>

      <header>
        <Nav />
      </header>
        <Hero />
      </main>
    <Aboutus/> 
      <Services/>
      <footer>
        <Footer />
      </footer>
     
    </>
  );
}
