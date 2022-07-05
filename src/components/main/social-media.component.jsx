import React from "react";
import "./social-media.styles.scss";

export const SocialMedia = (props) => {
  return (
    <div>
      <div
        className="container-social-media"
        style={{
          backgroundColor: `${props.color}`,
          background: `${props.gradient}`,
        }}
      >
        <div className="social-media-logo">
          <img src={props.logo} alt="logo" />
        </div>
        <div className="bottom-social-container">
          <div className="elemnts">
            <span>{props.number1}</span>
            <span style={{ opacity: "50%" }}>|</span>
            <span>{props.number2}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
