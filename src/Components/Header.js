import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";

const Header = ({ menu, setMenu }) => {
  const clickHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className="header">
      <IconContext.Provider value={{ color: "black" }}>
        <div className="logo">
          {!menu && (
            <span>
              <AiOutlineBars
                onClick={clickHandler}
                style={{ size: "65px", float: "left" }}
              />
            </span>
          )}
          <h3>People</h3>
          <button className="btn">+</button>
        </div>
        <div className="section">
          <span className="bar search-bar">
            <div className="icon search-icon">
              <AiOutlineSearch />
            </div>
            <input type="text" placeholder="Search" />
          </span>

          <span className="bar filter-bar">
            <div className="icon Filter-icon">
              <BiFilter />
            </div>
            <div className="filter">Filter</div>
          </span>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Header;
