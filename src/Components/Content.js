import bg from "../assets/images/image.png";
import { React, useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { ThemeContext } from "../App.js";
import "../assets/style/style.css";

function Content() {
  const [darkMode] = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  return (
    <div className="w-full h-full grid md:grid-cols-2 sm:grid-cols-1 items-center">
      <div
        className={`${show ? "show_img" : "hide_img"} duration-[1000ms] flex items-center justify-center w-full h-screen`}
      >
        <img
          src={bg}
          alt="guy_in_computer"
          className="md:w-1/2 image"
          loading="eager"
        />
      </div>

      <div
        className={`${show ? "show_content" : "hide_content"} duration-[1000ms] w-full h-screen md:text-left text-center flex flex-col justify-center md:pe-20 px-5`}
      >
        <h1
          className={`text-xl roboto ${darkMode ? "text-gray-300" : "text-gray-700"} `}
        >
          Hi I'm a <span className="text-indigo-500">Web Developer</span>
        </h1>

        <h1
          className={`md:text-6xl text-4xl ${darkMode ? "text-gray-300" : "text-gray-700"} my-7 montserrat`}
        >
          Granit Halimi
        </h1>
        <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} roboto`}>
          Hello, I'm Granit Halimi. I've been writing code for almost 2 years.
          <br />
          I completed a 6-month Coding Bootcamp "PerProgramera" where I was
          selected as a <br />
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500"
            href={
              "https://perprogramera.com/studentet-e-dalluar-te-bootcamp-9/"
            }
          >
            Distinguished Student
          </a>
          , I am interested in an internship in Front-End. <br />I have solved
          around 91
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500"
            href="https://leetcode.com/_ggranit/"
          >
            Leetcode Problems
          </a>
          (solving more everyday) <br />I am using{" "}
          <span
            className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
            style={{ fontWeight: 900 }}
          >
            ReactJs
          </span>
          , and{" "}
          <span
            className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}
            style={{ fontWeight: 900 }}
          >
            TailwindCSS
          </span>{" "}
          as technologies and these are some of my projects:
          <br />
        </p>

        <div className="w-full flex justify-center gap-6 my-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500 text-sm md:text-xl"
            href={"https://github.com/granithalimi/quickly"}
          >
            <div className="flex items-center">
              <span>QuickBuy</span>
              <FaShoppingCart />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500 text-sm md:text-xl"
            href={"https://github.com/granithalimi/SimpleSelect-Shop"}
          >
            <div className="flex items-center">
              <span>SimpleSelect-Shop</span>
              <FaShoppingBag />
            </div>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500 text-sm md:text-xl"
            href={"https://github.com/granithalimi/royal-hotel"}
          >
            <div className="flex items-center">
              <span>Royal Hotel</span>
              <FaHotel />
            </div>
          </a>{" "}
          <br />
        </div>

        <p className={`${darkMode ? "text-gray-400" : "text-gray-500"} roboto`}>
          Thank you in advance. <br />
          I look forward to your response, <br />
          Granit Halimi
        </p>
      </div>
    </div>
  );
}

export default Content;
