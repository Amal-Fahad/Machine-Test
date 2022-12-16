import React from "react";
import data from "../Data.json";
import Card from "./Card";

const FlowChart = () => {
  return (
    <div className="flowChart">
      <Card data={data} />
      <div
        style={{
          backgroundColor: "#fff",
          border: "1px solid #E7E5E4",
          borderRadius: "6px",
          height: "70px",
          width: "34px",
          textAlign: "center",
          float: "right",
          marginRight: "70px",
          marginBottom: "45px",
          boxShadow: "0 2px 5px 0 #000",
        }}
      >
        <div
          className="increment-btn"
          style={{ height: "50%", display: "grid", placeItems: "center" }}
        >
          +
        </div>
        <div
          className="decrement-btn"
          style={{ height: "50%", display: "grid", placeitems: "center" }}
        >
          -
        </div>
      </div>
    </div>
  );
};

export default FlowChart;
