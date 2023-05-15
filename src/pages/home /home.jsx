import React, { useState, useEffect } from "react";
import Nav from "../../components/navBar/navbar";
import TabBar from "../../components/tabBar/tabBar";
import "./home.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768); // Change 768 to whatever breakpoint you want
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      {isMobile && (
        <footer>
          <TabBar id="tabBar" />
        </footer>
      )}
    </>
  );
}
