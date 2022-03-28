/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/hero-img.svg";
export default function Homepage() {
  return (
    <>
      <div className="font-Inter md:grid grid-cols-2 divide-x-0 w-full h-screen bg-[url('/src/assets/images/hero-bg.png')]">
        <div className="flex flex-col  justify-center pt-32 md:pt-0 md:mx-12">
          <p className="text-4xl md:text-6xl font-bold px-3 text-center md:text-left md:mt-0 md:mx-12 leading-snug text-[#161637]">
            Book top tier labs near your area.
          </p>
          <p className="text-lg text-center md:text-left md:text-3xl p-3 mx-12 ">
            Take your research to next level
          </p>
          <div className="flex justify-center md:justify-start">
            <Link to="/labs">
              <button className="justify-start h-14 mx-16 px-6 md:w-max mt-3 font-semibold rounded-md bg-[#3d3dc3] text-white w-max shadow-[#3d3dc3] shadow-md">
                BOOK YOUR LABS
              </button>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-5">
          <img src={image} className="" />
        </div>
      </div>
    </>
  );
}
