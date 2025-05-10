import  { React, createContext, useState }from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Paths/Home.js"

export const ThemeContext = createContext()

function App() {
	const [darkMode, setDarkMode] = useState(false)
  return (
	  <ThemeContext.Provider value={[darkMode, setDarkMode]}>
	  <BrowserRouter   future={{
		  v7_startTransition: true,
			  v7_fetcherPersist: true,
			  v7_relativeSplatPath: true,
	  }}>
	  <Routes>
	  <Route element={<Home />} path="/" />
	  </Routes>
	  </BrowserRouter>
	  </ThemeContext.Provider>
  );
}

export default App;
