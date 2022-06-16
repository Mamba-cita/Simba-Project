import React from "react";
import { useState } from "react";
import { MenuList } from "./MenuList";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const MList = MenuList.map(({ url, name }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {name}
        </NavLink>
      </li>
    );
  });

  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="Nav">
      <div className="Nav-logo">
        AF<span className="set">Arena</span>
      </div>
      <div className="left">
        <div className="links" id={showLinks ? "hidden" : ""}>
          {MList}
        </div>

          <ReorderIcon className=" hamburger " />
       
      </div>

      <div className="right">
        <input type="text" placeholder="Search" />
        <button>
          <SearchIcon className="Search" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

/*
    <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
  */
