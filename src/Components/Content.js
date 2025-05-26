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
          Hi, I’m Granit Halimi — a passionate front-end developer with nearly
          two years of coding experience.
          <br />
          I completed a 6-month coding bootcamp at PerProgramera, where I was
          honored to be selected as a
          <br />
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500"
            href={
              "https://perprogramera.com/studentet-e-dalluar-te-bootcamp-9/"
            }
          >
            Distinguished Student.
          </a>{" "}
          <br />
          I’m currently seeking an internship in{" "}
          <span className="font-bold">Front-End Development</span> to continue
          growing my skills and contributing to real-world projects.
          <br />
          So far, I’ve solved over{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500"
            href="https://leetcode.com/_ggranit/"
          >
            90 LeetCode problems
          </a>
          (and counting!), sharpening my problem-solving and algorithmic
          thinking. <br />I primarily work with{" "}
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
          as technologies, and here are a few of the projects I’ve built:
          <br />
        </p>

        <div className="w-full flex justify-center gap-6 my-3">
          <a
            target="_blank"
            rel="noreferrer"
            className="underline text-indigo-500 hover:text-blue-700 duration-500 text-sm md:text-xl"
            href={"https://quickbuy-test.netlify.app/"}
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
          {/* Thank you in advance. <br />
          I look forward to your response, <br />
          Granit Halimi */}
          Thank you for visiting my portfolio. <br />
          I’m excited about the opportunity to learn and collaborate.
          <br />
          <span>Let’s connect!</span>
          <br />
          <span className="italic font-extrabold">-Granit Halimi</span>
        </p>
      </div>
    </div>
  );
}

export default Content;
