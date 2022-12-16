import React from "react";
import FlowChart from "./FlowChart";

const Main = () => {
  return (
    <div className="main">
      <div className="segment">
        <div className="segment-icons">
          <img src="\images\bars.png" alt="" />
        </div>
        <div className="segment-icons">
          <img src="\images\cata.png" alt="" />
        </div>
        <div className="segment-icons">
          <img src="\images\fluent_cube-tree-20-regular.png" alt="" />
        </div>
      </div>
      <FlowChart />
    </div>
  );
};

export default Main;
