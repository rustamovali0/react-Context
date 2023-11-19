import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Router/Home";
import Service from "./Components/Router/Service";
import Contact from "./Components/Router/Contact";
import Customer from "./Components/Router/Customer";
import Employee from "./Components/Router/Employee";
import Portfolio from "./Components/Router/Portfolio";
import { createContext } from "react";


export const ThemeContext = createContext();

function App() {

  const [dark, setDark] = React.useState("#000")

  const data = {
    dark, setDark
  }

  return (
    <div className="App">

    <ThemeContext.Provider value = {data} >
        <Navbar />

        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<Service />} path="/service" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<Customer />} path="/customer" />
          <Route element={<Employee />} path="/Employee" />
          <Route element={<Portfolio />} path="/Portfolio" />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;