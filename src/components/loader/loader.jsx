import { CircularProgress } from "@mui/material";
import React from "react";

const FoodLoader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default FoodLoader;
