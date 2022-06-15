import React from "react";
import "./Home.css";
import Navbar from "../MainNav/Navbar";
import Login from "../LogInPage/Login";

function Home() {
  return (
    <div>
      <Navbar />
      <Login/>
    </div>
  );
}

export default Home;
