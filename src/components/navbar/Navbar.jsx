import React from "react";
import "./navbar.scss";

import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__content">

        <div className="link">
          <LanguageOutlinedIcon className="icon" />
          Français
        </div>

        <div className="link">
          <NotificationsIcon />
          <div className="compteur">10</div>
        </div>

        <div className="link">
          <MenuIcon />
        </div>

        <div className="link">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
