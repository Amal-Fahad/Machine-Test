import React, { Fragment } from "react";
import SubCard from "./SubCard";
const Card = (props) => {
  return (
    <ul>
      {props.data.map((item, index) => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              {item.place && (
                <div className="logo">
                  <div className="logo-image">
                    <img src={`/images/${item.logo}`} alt="" />
                  </div>
                  <p>{item.place}</p>
                </div>
              )}
              <div className="image">
                <img src={`/images/${item.image}`} alt="Profile" />
              </div>

              <div className="card-body">
                <span className="dots">...</span>
                <h3>{item.name}</h3>
                <p>{item.post}</p>
                {item.retaillogo && (
                  <>
                    <button className="btn-retail">
                      <img src={`/images/Vector.png`} alt="logo" />
                      Retail
                    </button>
                  </>
                )}
              </div>
              <div className="cart-footer">
                {item.stroke && (
                  <span className="stroke">
                    {item.stroke}
                    <img src="/images/Stroke 1.png" alt="" />
                  </span>
                )}
                <span>+</span>
              </div>
              {item.subchildren?.length && <SubCard data={item.subchildren} />}
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

export default Card;
