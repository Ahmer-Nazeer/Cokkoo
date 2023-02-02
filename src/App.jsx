import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.page";
import Stories from "./pages/stories/stories.page";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/home" index element={<HomePage />} />
        <Route path="/stories"  element={<Stories />} />
      </Route>
    </Routes>
  );
}

export default App;
