import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const menuLinks = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT" },
    { path: "/projects", label: "PROJECTS" },
    { path: "/certificate", label: "CERTIFICATE" },
    { path: "/resume", label: "RESUME" },
    { path: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="flex justify-around items-center lg:my-8 my-2 relative">
      {/* Desktop Header */}
      <div className="hidden lg:flex w-full justify-between items-center">
        <div className="flexjustify-between items-center ms-15 my-2">
          <div className="text-xl font-extrabold tracking-wide text-white">
          PORTO
            <span className="text-[#9de40f]">///</span>O
          </div>
        </div>

        <div className="space-x-10 text-sm font-light mr-16 ">
          {menuLinks.map((link, idx) => (
            <NavLink
              key={idx}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "text-[#9de40f] underline underline-offset-4" : "text-white hover:text-[#9de40f]"
              }
              style={({ isActive }) =>
                isActive ? { textDecorationColor: "white" } : {}
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
       
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden w-full justify-between items-center mx-6 my-2">
        <div className="flex lg:hidden w-full justify-between items-center mx-6 my-2">
          <div className="text-lg font-extrabold tracking-wide text-white">
            Yogesh's PORTO
            <span className="text-[#9de40f]">///</span>O
          </div>
        </div>

        <div className="relative">
          <button className="text-2xl z-50 relative" onClick={toggleMenu}>
            {isMenuOpen ? "X" : "☰"}
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 top-full mt-2 bg-[#171815] flex flex-col space-y-4 px-5 py-3 min-w-[150px] z-40 rounded shadow-lg">
              {menuLinks.map((link, idx) => (
                <NavLink
                  key={idx}
                  to={link.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-[#9de40f] underline underline-offset-4"
                      : "text-white"
                  }
                  onClick={() => setIsMenuOpen(false)} // Menu close on link click
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
