import  { createContext, useState, React }from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Paths/Home.js"

export const ColorContext = createContext();

function App() {
	  const [dark, setdark] = useState(false)
  return (
	  <ColorContext.Provider value={[dark, setdark]}>
	  <BrowserRouter   future={{
		  v7_startTransition: true,
		  v7_fetcherPersist: true,
		  v7_relativeSplatPath: true,
	  }}>
	  <Routes>
	  	<Route element={<Home />} path="/" />
	  </Routes>
	</BrowserRouter>
	  </ColorContext.Provider>
  );
}

export default App;
