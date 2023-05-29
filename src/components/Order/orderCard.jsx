import React, { useEffect, useState } from "react";
import axios from "axios";
import "./order.css";
import OneOrderCard from "./oneOrderCards";
export default function OrderCard(product) {
  const [data1, setData1] = useState([]);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8000/category/", {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("access_token"),
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.response);
  //       console.log(response.data.response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // ////////////////////////////////////////
  useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData1(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  ///////////////////////////////////

  return (
    <div>
      <div className="searchbar">
        <select><optinion>hhhh</optinion></select>
        
        </div>
        <div className="row-order">
  {data1.map((product, index) => (
  <OneOrderCard product={product} index={index} key={index}/>
  ))}
</div>

    </div>
  );
}
