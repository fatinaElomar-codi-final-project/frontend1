import React, { useContext, useEffect, useState } from "react";
import "./dishs.dashboard.css";
import FoodLoader from "../../components/loader/loader";
import axios from "axios";
import MUIDataTable from "mui-datatables";

function TableDishs() {
  const options = {
    filterType: "checkbox",
    responsive: "simple",
    selectableRows: "none",
    search: true,
    searchPlaceholder: "Search for Dishs",
    download: true,
    print: true,
    pagination: true,
    rowsPerPage: 5,
    loaded: true,
    rowsPerPageOptions: [5],
  };

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/dish/", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      name: "_id",
      label: " ",
      options: {
        display: "none",
      },
    },
    {
      name: "patient",
      label: "Description",
      options: {
        customBodyRender: (value) => `bill of ${value.first_name} ${value.last_name}`,
      },
    },
    {
      name: "patient",
      label: "First Name",
      options: {
        customBodyRender: (value) => value.first_name,
      },
    },
    {
      name: "patient",
      label: "Last Name",
      options: {
        customBodyRender: (value) => value.last_name,
      },
    },
    {
      name: "patient",
      label: "Email",
      options: {
        customBodyRender: (value) => value.email,
      },
    },
    {
      name: "patient",
      label: "Phone Number",
      options: {
        customBodyRender: (value) => value.phone_number,
      },
    },
    {
      name: "paid",
      label: "Paid",
    },
    {
      name: "date",
      label: "Date",
    },
  ];

  if (!data) return <FoodLoader />;
  return (
    <div className="Dishs_table">
      <div className="table_mui">
        <MUIDataTable
          columns={columns}
          data={data.filter((ele) => {
            return ele.paid;
          })}
          options={options}
          title={<>Income</>}
        />
      </div>
    </div>
  );
}

export default TableDishs;
