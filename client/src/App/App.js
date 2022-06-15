import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "../components/pages/HomePage/Home";
import AddEdit from "../components/pages/AddEditPage/AddEdit";
import navbar from "../components/pages/MainNav/Navbar";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AddContact" component={AddEdit} />
        <Route exact path="/MainNav" component={navbar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
