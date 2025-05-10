import { CgProfile } from "react-icons/cg";
import { React, useContext ,useState, useEffect} from "react"
import { ThemeContext } from "../App.js"
function Header() {
	const [darkMode, setDarkMode] = useContext(ThemeContext)
	const [show, setShow] = useState(false)

	useEffect(() => {
	  setTimeout(() => {
	  	setShow(true)
	  }, 500);
	}, [])
	
  return (
	  <div className={`absolute ${show ? "top-5" : "-top-full"} duration-[750ms] left-0 right-0 w-full h-16 flex justify-center z-20`}>
	  <div className="w-5/6 h-full backdrop-blur-sm bg-white/10 flex justify-center roundeimgd-xl">
	 	<div className="w-2/3 h-full flex justify-between">
			<div className="h-full w-20 flex justify-center items-center">
	  			<CgProfile className={`text-5xl ${darkMode ? "text-gray-300" : "text-gray-500"}`} /> 
	  </div>
			<div className={`h-full flex gap-4 ${darkMode ? "text-gray-300" : "text-gray-500"} `}>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button onClick={e => setDarkMode(!darkMode)} className="cursor-pointer hover:text-black duration-500">DARKMODE</button>
	  </div>
	  </div> 
	  </div>
	  </div>
  )
}

export default Header
