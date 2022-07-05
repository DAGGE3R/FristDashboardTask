import React from "react";
import "./top-charts.styles.scss";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const TopChart = (props) => {
  return (
    <div className="top-charts-component">
      <div
        className="numbers-description"
        style={{
          backgroundImage: `url(${props.img})`,
        }}
      >
        <div className="numbersDescription-container">
          <span className="num">{props.number}</span>
          <span className="desc">{props.description}</span>
        </div>
        <div className="settings">
          <SettingsOutlinedIcon style={{ fontSize: "1.5vw" }} />
        </div>
      </div>
    </div>
  );
};
