import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../components/pages/HomePage/Home";
import AddEdit from "../components/pages/AddEditPage/AddEdit";
import About from "../components/pages/AboutPage/About";
import Login from "../components/pages/LogInPage/Login";
import Contact from "../components/pages/ContactPage/Contact";
import SignUp from "../components/pages/SignUpPage/SignUp";
import Navbar from "../components/pages/MainNav/Navbar";
import "./App.css";
function App() {
  return (
    <div className="Container">
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/AddContact" component={AddEdit} />
        
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
