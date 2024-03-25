import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"
import {
  MainRouter, 
  Home,
  About,
  Solution,
  Pricing,
  Blog,
  Contact
} from "./pages";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainRouter />} >
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
 
  );
}

export default App;
