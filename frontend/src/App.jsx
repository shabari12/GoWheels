import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainSignUp from "./pages/CaptainSignUp";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<UserLogin />}></Route>
        <Route path="/signup" element={<UserSignup />}></Route>
        <Route path="/captain-login" element={<CaptainLogin />}></Route>
        <Route path="/captain-signup" element={<CaptainSignUp />}></Route>
      </Routes>
    </div>
  );
};

export default App;
