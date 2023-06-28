import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/beau-logo.jpg";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 w-full bg-white z-10 py-2 ">
      <div className="container mx-auto px-8 flex items-center justify-between relative ">
        <div className="w-52 h-16">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className=" w-full h-full object-center  rounded-xl "
            />
          </Link>
        </div>

        <div className="flex items-center justify-between">
          <ul
            className={` md:flex md:items-center ${
              isOpen
                ? " max-md:flex-col  max-md:absolute max-md:top-24 max-md:left-5  max-md:bg-gray-100  max-md:w-11/12 max-md:rounded-lg max-md:px-4 max-md:mx-auto max-md:container"
                : "hidden"
            }`}
          >
            <li className="relative mx-4 py-2 mt-2 md:mt-0">
              <Link to="/cart">
                <AiOutlineShoppingCart className="text-4xl text-gray-500" />
              </Link>
              <span className="absolute top-0 left-4 bg-yellow-400 w-6 rounded-full text-center ">
                5
              </span>
            </li>
            <li className="relative mx-4 py-2 ">
              <Link to="/wish">
                <AiOutlineHeart className="text-4xl text-gray-500" />
              </Link>
              <span className="absolute top-0 left-4 bg-yellow-400 w-6 text-center rounded-full ">
                5
              </span>
            </li>

            <li className="">
              <button className="bg-black text-white   py-1 px-4 rounded-md ">
                <Link to="/login">login</Link>
              </button>
            </li>
          </ul>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer"
          >
            <AiOutlineMenu className="text-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
