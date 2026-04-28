import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/profile";
import Counter from "./pages/Counter";
import History from "./pages/History";  


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/counter" element={<Counter /> } />
        <Route path="/history" element={<History /> } />
        <Route path="/profile" element={<Profile /> } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
