import Header from "../Components/Header.js"
import Content from "../Components/Content.js"
import { React, useContext } from "react"
import { ThemeContext } from "../App.js"
function Home() {
	const [darkMode, ] = useContext(ThemeContext)
  return (
	  <div className={`${darkMode ? "bg-gray-700" : "bg-indigo-200"} w-full h-screen relative overflow-x-hidden`}>
	  	<Header />
	  	<Content />	
	  </div>
  )
}

export default Home
