/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/hero-img.svg";
export default function Homepage() {
  return (
    <>
      <div className=" font-serif md:grid grid-cols-2 divide-x-0 w-full h-screen bg-[url('/src/assets/images/hero-bg.png')]">
        <div className="flex flex-col  justify-center p-5">
          <p className="text-5xl font-bold p-3 mt-7 md:mt-0 mx-5">
            Can't do labs due to covid?
          </p>
          <p className="text-xl md:text-3xl p-3 m-5 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed porro,
            corrupti corporis molestias consequatur quia illum tempora velit vel
            doloribus maxime animi dignissimos quas sit veniam deserunt at
            temporibus doloremque?
          </p>
          <Link to="/labs">
            <button className="justify-start h-10 mx-6 px-6 md:w-1/3 font-semibold rounded-md bg-black text-white">
              Book Labs
            </button>
          </Link>
        </div>
        <div className="flex items-center justify-center p-5">
          <img src={image} className="hidden md:block" />
        </div>
      </div>
    </>
  );
}
