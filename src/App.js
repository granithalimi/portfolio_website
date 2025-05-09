import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Paths/Home.js"
function App() {
  return (
	<BrowserRouter>
	  <Routes>
	  	<Route element={<Home />} path="/" />
	  </Routes>
	  </BrowserRouter>
  );
}

export default App;
