import React from "react";
import SpeedOutlinedIcon from "@mui/icons-material/SpeedOutlined";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import "./sidebar.styles.scss";
export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="dashboard">
        <SpeedOutlinedIcon fontSize="medium" />
        <span>Dashboard</span>
      </div>
      <div className="ui-elements">
        <div className="title">
          <span>UI ELEMENTS</span>
        </div>
        <ul>
          <li className="item">
            <ExtensionOutlinedIcon />
            <span>Components</span>
          </li>
          <li className="item">
            <InsertEmoticonOutlinedIcon />
            <span>Icons</span>
          </li>
          <li className="item">
            <WidgetsOutlinedIcon />
            <span>Widgets</span>
          </li>
          <li className="item">
            <PieChartOutlineOutlinedIcon />
            <span>Charts</span>
          </li>
        </ul>
      </div>
      <div className="extras-container">
        <div className="title-extras">EXTRAS</div>
        <div className="extras-items">
          <StarBorderOutlinedIcon />
          <span>Pages</span>
        </div>
      </div>
    </div>
  );
};
