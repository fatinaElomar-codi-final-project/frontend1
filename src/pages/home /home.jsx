import { Stack } from "@mui/system";
import React, { useEffect } from "react";
import Aboutus from "../../components/about us/about us.jsx";
import Hero from "../../components/hero/hero.jsx";
import ProductCarousel from "../../components/product-carousal/products_carousel.jsx";
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

        <ProductCarousel />
      </Stack>
      <div className="space"></div> {/* Add space */}

      <Services />
      <div className="space"></div> {/* Add space */}

    <Server/>
      <div className="space"></div> {/* Add space */}

      <Aboutus style={{ margin: "0" }} />

    
    </>
  );
}
