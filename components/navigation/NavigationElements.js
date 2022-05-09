import React from "react";
import Link from "next/link";

const NavigationElements = ({ menuItemsData }) => {
  return (
    <>
      <nav className="main-nav">
        <ul className="flex justify-center text-center text-base tracking-widest uppercase">
          {menuItemsData.map((menuItemData) => (
            <li key={menuItemData.ID} className="mx-4">
              <Link href={menuItemData.url}>
                <a className="text-white hover:text-white/70 transition">
                  {menuItemData.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavigationElements;
