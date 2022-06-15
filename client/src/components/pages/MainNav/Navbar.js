import React from "react";
import{useState} from 'react';
import "./Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {

const [showLinks, setShowLinks] = useState(false);



  return (
    <nav className="Nav">
      <div className="left">
        <div className="links" id={showLinks ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a href="/signup">Signup</a>
        </div>

        <button className="hamburger" onClick={() => setShowLinks(!showLinks)}><ReorderIcon className="ReorderIcon"/></button>
      </div>

      <div className="right">
      
      <input type="text" placeholder="Search" />
      <button><SearchIcon className="Search"/></button>
      
       </div>
    </nav>
  );
}


export default Navbar;

