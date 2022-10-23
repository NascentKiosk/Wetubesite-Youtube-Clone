import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from './logo.svg' ;
import{
  Menu,
  Search,
  VideoCall,
  Notifications,
  Apps,
  Mic,
} from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <img src={logo} alt="Logo" className="header-logo"/>
      </div>
      <div className="header__middle">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Link to={`/search/:${inputSearch}`}>
          <Search className="header__middleSearch" />
        </Link>
        <Mic className="header__middleMic" />
      </div>
      <div className="header__right">
        <VideoCall />
        <Apps />
        <Notifications />
         <Avatar alt="" src="" className="header-avater" />
      </div>
    </div>
  );
}

export default Header;
