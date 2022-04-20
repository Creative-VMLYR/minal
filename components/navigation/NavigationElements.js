import React from "react";

const NavigationElements = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="flex justify-center text-center text-base tracking-widest uppercase">
          <li className="mx-4">
            <a href="#" className="text-white hover:text-white/70 transition">
              Home
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white hover:text-white/70 transition">
              Blog
            </a>
          </li>
          <li className="mx-4">
            <a href="#" className="text-white hover:text-white/70 transition">
              FAQs
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavigationElements;
