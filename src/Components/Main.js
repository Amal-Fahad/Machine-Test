import React from "react";
import FlowChart from "./FlowChart";

const Main = () => {
  return (
    <div className="main">
      <div className="segment">
        <div className="segment-icons">
          <img src={`${process.env.PUBLIC_URL}/images/bars.png`} alt="img" />
        </div>
        <div className="segment-icons">
          <img src={`${process.env.PUBLIC_URL}/images/cata.png`} alt="img" />
        </div>
        <div className="segment-icons">
          <img src={`${process.env.PUBLIC_URL}/images/fluent_cube-tree-20-regular.png`} alt="img" />
        </div>
      </div>
      <FlowChart />
    </div>
  );
};

export default Main;
