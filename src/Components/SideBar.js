import React from "react";

const SideBar = ({ menu, setMenu }) => {
  const clickHandler = () => {
    setMenu(!menu);
  };
  return (
    <>
      {menu && (
        <div className="sideBar">
          <div className="canvas">
            <div className="circle" onClick={clickHandler}></div>
          </div>
          <ul>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/Category.png`}  alt="logologo" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/1.png`} alt="logo" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/Group 763754.png`}  alt="logo" />
            </li>
            <li className="active">
              <img src={`${process.env.PUBLIC_URL}/images/Group 763755.png`} alt="logo" />
            </li>
            <li>
              <img src={`${process.env.PUBLIC_URL}/images/building-line.png`} alt="logo" />
            </li>
          </ul>

          <div className="bell-icon">
            <div className="icon-img">
              <img src={`${process.env.PUBLIC_URL}/images/Notification.png`} alt="logo" />
            </div>
            <div className="profile-img">
              <img src={`${process.env.PUBLIC_URL}/images/Mask group.png`} alt="logo" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
