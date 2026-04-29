import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Counter from "./pages/Counter";
import History from "./pages/History";  


function App() {
  const [selectedbtn, setSelectedbtn] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home selectedbtn={selectedbtn} setSelectedbtn={setSelectedbtn} /> } />
        <Route path="/counter" element={<Counter selectedbtn={selectedbtn} /> } />
        <Route path="/history" element={<History /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
