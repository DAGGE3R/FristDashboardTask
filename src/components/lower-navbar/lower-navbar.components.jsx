import React from "react";
import "./lower-navbar.styles.scss";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const LowerNavbar = () => {
  return (
    <div className="lower-bar">
      <div className="path">
        <span className="home">Home</span>/<span className="admin">Admin</span>/
        <span className="dash">Dashboard</span>
      </div>
      <div className="right-props">
        <div className="dashboard">
          <InsightsOutlinedIcon />
          <span>Dashboard</span>
        </div>
        <div className="settings">
          <SettingsOutlinedIcon />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
};
