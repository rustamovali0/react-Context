import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Router/Home";
import Service from "./Components/Router/Service";
import Contact from "./Components/Router/Contact";
import Customer from "./Components/Router/Customer";
import Employee from "./Components/Router/Employee";
import Portfolio from "./Components/Router/Portfolio";
import { Context } from "./Context/Context";
import { useContext } from 'react';
// import "./Style.css"
import './Components/Router/style.css'

// document.classlist
// localStorage




function App() {

  const { theme } = useContext(Context)
  console.log(theme)

  return (
    <div className={`App ${theme}`}>  


      <Navbar />

      <Routes>
        <Route element={<Home />} path="/home" />
        <Route element={<Service />} path="/service" />
        <Route element={<Contact />} path="/contact" />
        <Route element={<Customer />} path="/customer" />
        <Route element={<Employee />} path="/Employee" />
        <Route element={<Portfolio />} path="/Portfolio" />
      </Routes>

    </div>
  );
}

export default App;
