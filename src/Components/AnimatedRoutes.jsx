import React from "react";
import Price from "../Pages/Pricing";
import Team from "../Pages/Team";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import About from "../Pages/About";
import {Routes, Route , useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="prices" element={<Price />} />
        <Route path="team" element={<Team />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
