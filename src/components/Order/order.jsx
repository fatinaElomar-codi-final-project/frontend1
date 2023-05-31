import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderCard from "./orderCard";
export default function Order(product) {

  return (
    <div>
      <div className="row-order-1">
       
            <div className="order-col-md-4">
              <div className="order-product-1"  style={{ minHeight: "calc(100vh - 96px)" }} >
              <OrderCard order={product} />

              </div>
            </div>
       
      </div>
      
    </div>
  );
}
