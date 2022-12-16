import React from "react";

const SubCard = (props) => {
  return (
    <div className="subCard">
      {props.data.map((item) => (
        <div className="card" key={item.id}>
          <div className="image">
            <img
              src={`${process.env.PUBLIC_URL}/images/${item.image}`}
              alt="Profile"
            />
          </div>

          <div className="card-body">
            <span className="dots">...</span>
            <h3>{item.name}</h3>
            <p>{item.post}</p>
          </div>
          <div className="cart-footer">
            {item.stroke && (
              <span className="stroke">
                {item.stroke}
                <img src={`${process.env.PUBLIC_URL}/images/Stroke 1.png`} alt="img" />
              </span>
            )}
            <span>+</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubCard;
