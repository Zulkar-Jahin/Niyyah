import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import protectedRoute from "../utils/protectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Counter from "./pages/Counter";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Layout: control navbar visibility and content margin based on current route.
function Layout({ children, isOpen, setIsOpen }) {
  const location = useLocation();
  const hideNavbar = ["/login", "/register"].includes(location.pathname);
  return (
    <div className="flex">
      {!hideNavbar && <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />}
      <div
        className={`flex-1 transitoin-all duration-300 ease-in-out ${
          !hideNavbar && isOpen ? "lg:ml-56" : "ml-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function App() {
  const [selectedbtn, setSelectedbtn] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <Layout isOpen={isOpen} setIsOpen={setIsOpen} />
      <Routes>
        <Route
          path="/"
          element={
            <Home selectedbtn={selectedbtn} setSelectedbtn={setSelectedbtn} />
          }
        />
        <Route
          path="/counter"
          element={
            <protectedRoute>
              <Counter selectedbtn={selectedbtn} />
            </protectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <protectedRoute>
              <History />
            </protectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <protectedRoute>
              <Profile />
            </protectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
