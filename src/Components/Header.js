import { CgProfile } from "react-icons/cg";
function Header() {
  return (
	  <div className="absolute top-5 left-0 right-0 w-full h-16 flex justify-center ">
	  <div className="w-5/6 h-full backdrop-blur-lg bg-white/10 flex justify-center rounded-xl">
	 	<div className="w-2/3 h-full flex justify-between">
			<div className="h-full w-20 flex justify-center items-center">
	  			{/**/}
	  			<CgProfile className="text-5xl text-gray-500" /> 
	  </div>
			<div className="h-full flex gap-4 text-gray-500">
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  			<button className="cursor-pointer hover:text-black duration-500">testing</button>
	  </div>
	  </div> 
	  </div>
	  </div>
  )
}

export default Header
