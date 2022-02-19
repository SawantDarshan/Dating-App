import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../modules/pop_ups/login/Login";

function RouterWrap() {
  return (
    <Router>
      <Routes>
        <Route exact path="login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterWrap;
