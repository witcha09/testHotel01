import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/home/home.component";
import Login from "./components/login/login.component";
//import Login from "./components/login/login.service";
import Register from "./components/register/register.component";
import Data from "./components/data/data.component";


class App extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            DevPi
          </Link>
          <div className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/data"} className="nav-link">
                Data
              </Link>
            </li>

          </div>

          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
            

          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/data" element={<Data />} />
          </Routes>
        </div>

        {/*<AuthVerify logOut={this.logOut}/> */}


      </div>

 
    );
  }
}

export default App;
