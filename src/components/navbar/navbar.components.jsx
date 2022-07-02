import React from "react";
import Logo from "../../Assets/logo.svg";
import "./navbar.styles.scss";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

export const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="wrapper">
          <div className="list">
            <img src={Logo} alt="" />
            <div className="item-left-menu">
              <MenuOutlinedIcon />
            </div>
            <ul className="list-items">
              <li>Dashboard</li>
              <li>Users</li>
              <li>Settings</li>
            </ul>
          </div>
          <div className="admin-properties">
            <div className="item-admin">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="item-admin">
              <FormatListBulletedOutlinedIcon />
            </div>
            <div className="item-admin">
              <LocationOnOutlinedIcon />
            </div>
            <div className="item-admin">
              <img
                className="avatar"
                src="https://retrology.net/wp-content/uploads/2022/04/anya-forger.webp"
                alt=""
              ></img>
            </div>

            <div className="item-admin">
              <h5>Admin</h5>
            </div>
            <div className="item-admin">
              <MenuOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
