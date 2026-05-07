import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Counter from "./pages/Counter";
import History from "./pages/History";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [selectedbtn, setSelectedbtn] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className= {`flex-1 transition-all duration-500 ease-in-out ${isOpen ? "ml-56":"ml-0"} `} >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  selectedbtn={selectedbtn}
                  setSelectedbtn={setSelectedbtn}
                />
              }
            />
            <Route
              path="/counter"
              element={<Counter selectedbtn={selectedbtn} />}
            />
            <Route path="/history" element={<History />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
