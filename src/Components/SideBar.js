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
              <img src="\images\Category.png" alt="" />
            </li>
            <li>
              <img src="/images/1.png" alt="" />
            </li>
            <li>
              <img src="\images\Group 763754.png" alt="" />
            </li>
            <li className="active">
              <img src="\images\Group 763755.png" alt="" />
            </li>
            <li>
              <img src="\images\building-line.png" alt="" />
            </li>
          </ul>

          <div className="bell-icon">
            <div className="icon-img">
              <img src="\images\Notification.png" alt="img" />
            </div>
            <div className="profile-img">
              <img src="\images\Mask group.png" alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
