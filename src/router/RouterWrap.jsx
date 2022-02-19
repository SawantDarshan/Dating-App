import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../modules/pop_ups/login/Login";
import Home from "../pages/Home"

function RouterWrap() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterWrap;
