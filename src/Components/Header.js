import { CgProfile } from "react-icons/cg";
import { React, useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App.js";
import { MdMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { RiInformation2Line } from "react-icons/ri";
function Header() {
  const [darkMode, setDarkMode] = useContext(ThemeContext);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <div
      className={`absolute ${show ? "top-5" : "-top-full"} rounded-lg duration-[750ms] left-0 right-0 w-full h-16 flex justify-center z-20`}
    >
      <div className="w-5/6 h-full backdrop-blur-sm bg-white/10 flex justify-center rounded-lg">
        <div className="w-2/3 h-full flex justify-between items-center">
          <div className="h-full w-20 flex justify-center items-center">
            <CgProfile
              className={`md:text-5xl text-3xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}
            />
          </div>
          <div
            className={` md:flex hidden gap-4 ${darkMode ? "text-gray-300" : "text-gray-500"} `}
          >
            <div
              onClick={(e) => setShowInfo(!showInfo)}
              className={`flex justify-center items-center relative cursor-pointer flex gap-3 py-1 px-3 rounded-lg bg-white/20 backdrop-blur-sm `}
            >
              <h1>Info</h1>
              <RiInformation2Line />
              <div
                className={`${showInfo ? "absolute" : "hidden"} ${darkMode ? "text-gray-300" : "text-gray-500"} flex flex-col items-center gap-3 w-[300%] h-screen bg-white/10 backdrop-blur-sm z-20 top-full`}
              >
                <p className="pt-10">halimigranit6@gmail.com</p>
                <p>+389 77 222 726</p>
              </div>
            </div>
            <button
              onClick={(e) => setDarkMode(!darkMode)}
              className="cursor-pointer hover:text-black duration-500"
            >
              <WiMoonAltFirstQuarter className="text-center text-xl" />
            </button>
          </div>
          <div className={`md:hidden flex justify-center items-center h-full`}>
            {showMenu ? (
              <IoClose
                className={`text-2xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                onClick={(e) => setShowMenu(!showMenu)}
              />
            ) : (
              <MdMenu
                className={`text-2xl ${darkMode ? "text-gray-300" : "text-gray-500"}`}
                onClick={(e) => setShowMenu(!showMenu)}
              />
            )}
            <div
              className={`${showMenu ? "absolute" : "hidden"} ${darkMode ? "text-gray-300" : "text-gray-500"} flex flex-col items-center gap-3 w-1/2 h-screen bg-white/10 backdrop-blur-sm z-20 right-0 top-full`}
            >
              <h1>Info:</h1>
              <p>halimigranit6@gmail.com</p>
              <p>+389 77 222 726</p>

              <button
                onClick={(e) => setDarkMode(!darkMode)}
                className="cursor-pointer hover:text-black duration-500"
              >
                <WiMoonAltFirstQuarter className="text-center text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
