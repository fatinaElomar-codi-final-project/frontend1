import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Aboutus from "../../components/about us/about us.jsx";
import Footer from "../../components/footer/footer.jsx";
import Hero from "../../components/hero/hero.jsx";
import Nav from "../../components/navBar/navbar";
import NewdishSlider from "../../components/newdishes/newdishs";
import Services from "../../components/services/services";
import Server from "../server/server.jsx";
import "./home.css";

export default function Home() {
  return (
    <>
   
      <Hero />
      <div className="space"></div> {/* Add space */}

      <Stack
        direction="column"
        alignItems="center"
        sx={{ animation: "fadeIn 1s ease-in" }} // Add animation
      >
        <NewdishSlider />
      </Stack>
      <div className="space"></div> {/* Add space */}

      <Services id="idservices" />
      <div className="space"></div> {/* Add space */}

    <Server/>
      <div className="space"></div> {/* Add space */}

      <Aboutus style={{ margin: "0" }} />

    
    </>
  );
}
