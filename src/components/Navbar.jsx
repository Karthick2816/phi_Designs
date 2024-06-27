import React, { useContext, useEffect, useState } from "react";

import { RiUserShared2Fill } from "react-icons/ri";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  // console.log(user);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <a className="text-green" href="/">
          HOME
        </a>
      </li>
      <li>
        <a className="text-green" href="/">
          ABOUT US
        </a>
      </li>

      <li>
        <a className="text-green" href="/">
          PORTFOLIO
        </a>
      </li>
      <li>
        <a className="text-green" href="/">
          {" "}
          VIRTUAL WALKTHROUGHS
        </a>
      </li>
      <li>
        <a className="text-green" href="/">
          CONTACT US
        </a>
      </li>
    </>
  );
  return (
    <header
      className={`max-w-screen-2xl container mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out`}
    >
      <div
        className={`navbar xl:px-24 ${
          isSticky
            ? "shadow-md bg-black transition-all duration-300 ease-in-out"
            : ""
        }`}
      >
        <div className="navbar-start">
          <div className="justify-between dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-64 space-y-3"
            >
              {navItems}
            </ul>
          </div>
          <a href="/">PHI Designs</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">{navItems}</ul>
        </div>
        <div className="navbar-end ">
          <button className="flex items-center gap-2 px-6 text-white rounded-full btn bg-green">
            <RiUserShared2Fill />
            +6386286799
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
