import React from "react";
import { Link } from "react-router-dom";
// npm i
import {useContext} from "react";
import {Context} from "../Context/Context";
// import "../style.css"

const Navbar = () => {
  const {theme, setTheme} = useContext(Context)
const changeTheme = ()=>{
  setTheme(theme === "light" ? "dark" : "light")
}

  return (
    <div>
      <nav class={`navbar navbar-expand-lg bg-body-tertiary ${theme}`}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Employee
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Customer
                </a>
              </li>
            </ul>
           
          </div>
        </div>
        <button className="btn btn-dark ms-2" 
            onClick={()=>{
              changeTheme()
            }}
            >{theme}</button>
      </nav>
    
    </div>
  );
};

export default Navbar;
