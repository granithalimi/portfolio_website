import bg from "../assets/images/image.png"
import { React, useState, useContext, useRef, useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import "../assets/style/style.css"
import { ColorContext } from '../App';

function Content() {
	const [darkMode, setdarkMode] = useContext(ColorContext)
  return (
    <div className="w-full h-full flex justify-center items-center">
	  <div className="flex items-center justify-center w-1/2 h-screen">
		<img src={bg} className="w-1/2 image"  />
	  </div>
	  <div className="w-1/2 h-screen flex flex-col justify-center pe-20">
		<h1 className="text-xl roboto text-gray-700">Hi I'm a <span className="text-indigo-500">Web Developer</span></h1>
		<h1 className="text-5xl text-gray-700 my-7 montserrat">Granit Halimi</h1>
	  <p className="text-gray-500 roboto">
	  Pershendetje,
	  Une jam Granit Halimi Shkruaj kod pothuajse 2 vite. <br />
	  Kam kryer nje Coding Bootcamp 6 mujor "PerProgramera" 
	  ku dhe jam zgjedhur <a target="_blank" className="underline text-indigo-500 hover:text-blue-700" href={'https://perprogramera.com/studentet-e-dalluar-te-bootcamp-9/'}>Student i Dalluar</a>, <br />
	  Jam i interesuar per nje inernship ne Front-End. <br />
	  I kam zgjidhur rreth 91 probleme ne <a target="_blank" className="underline text-indigo-500 hover:text-blue-700" href="https://leetcode.com/_ggranit/">Leetcode</a>(cdo dite e me shume) <br /> 
	  Jam duke i perdor ReactJs, dhe TailwindCSS si teknologji dhe keto jane disa nga projektet e mia: <br />
	  </p>
	  <div className="w-full flex justify-center gap-6 my-3">
	  <a target="_blank" className="underline text-indigo-500 hover:text-blue-700 text-xl" href={"https://github.com/granithalimi/quickly"}><div className="flex items-center"><span>QuickBuy</span><FaShoppingCart/></div></a>
	  <a target="_blank" className="underline text-indigo-500 hover:text-blue-700 text-xl" href={"https://github.com/granithalimi/SimpleSelect-Shop"}><div className="flex items-center"><span>SimpleSelect-Shop</span><FaShoppingBag/></div></a> 
	  <a target="_blank" className="underline text-indigo-500 hover:text-blue-700 text-xl" href={"https://github.com/granithalimi/royal-hotel"}><div className="flex items-center"><span>Royal Hotel</span><FaHotel/></div></a> <br />
	  </div>
	  <p className="text-gray-500 roboto">
	  Faleminderit paraprakisht. <br />
	  Gjitha te mirat,
	  Granit Halimi
	  </p>	
	  </div>
		
	  </div>
  )
}

export default Content
