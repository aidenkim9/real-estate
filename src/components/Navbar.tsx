import { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="container flex items-center mx-auto justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} alt="" />
        <ul className="hidden md:flex gap-7 text-white">
          <li className="">
            <a href="#Header" className="cursor-pointer hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#About" className="cursor-pointer hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#Projects" className="cursor-pointer hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a
              href="#Testimonials"
              className="cursor-pointer hover:text-gray-400"
            >
              Testimonials
            </a>
          </li>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded-full">
          Sign Up
        </button>
        <img
          onClick={() => {
            setShowMobileMenu(true);
          }}
          src={assets.menu_icon}
          alt=""
          className="md:hidden w-7 cursor-pointer"
        />
      </div>
      {/* ------ mobile-menu ------- */}
      <div
        className={`${
          showMobileMenu ? "fixed w-full" : "w-0 h-0"
        } md:hidden  top-0  right-0 bottom-0 overflow-hidden  bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => {
              setShowMobileMenu(false);
            }}
            src={assets.cross_icon}
            className="w-6"
            alt=""
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 pt-5 text-lg font-medium">
          <li>
            <a
              onClick={() => {
                setShowMobileMenu(false);
              }}
              href="#Header"
              className="px-4 py-2 rounded-full inline-block"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMobileMenu(false);
              }}
              href="#About"
              className="px-4 py-2 rounded-full inline-block"
            >
              About
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMobileMenu(false);
              }}
              href="#Projects"
              className="px-4 py-2 rounded-full inline-block"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMobileMenu(false);
              }}
              href="#Testimonials"
              className="px-4 py-2 rounded-full inline-block"
            >
              Testimonials
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
