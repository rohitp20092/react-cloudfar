import React from "react";
import './App.css';
import Home from "./Home";

import {
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
function App(request) {
console.log(request,"request coming ")
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
     
    </Routes>
  </BrowserRouter>
  );
}

export default App;

