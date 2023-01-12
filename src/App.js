import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PasswordGenerator from "./pages/PasswordGenerator";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/password" element={<PasswordGenerator />}></Route>
      </Routes>
    </>
  );
}

export default App;
