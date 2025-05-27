"use client";

import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CgCloseO } from "react-icons/cg";
import { RiMenuSearchLine } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const links = {
    home: { name: "Home", href: "/" },
    features: { name: "Features", href: "/features" },
    about: { name: "About me", href: "/about" },
    download: {
      href: "/download",
      name: "Download",
      content: <Button intent="secondary">Install the Extension</Button>,
    },
    contact: {
      href: "https://www.linkedin.com/in/stephanie-gurgel-7998aa35b/",
      name: "Contact",
      content: <Button intent="primary">Contact me</Button>,
    },
  };

  return (
    <nav className="w-full flex justify-between bg-[#0B0121] px-1 text-white h-[55px] overflow-hidden fixed top-0 z-40">
      <div className="h-[55px] w-[55px]">
        <Image
          src="/icon.png"
          alt="icon"
          layout="responsive"
          className="w-full h-full"
          width={50}
          height={50}
        />
      </div>
      <ul className="flex max-[750px]:hidden min-[750px]:flex-row justify-between text-white items-center">
        {Object.values(links).map((link, index) => (
          <li key={index} className="hover:text-white/75 px-3 cursor-pointer">
            {"content" in link ? (
              <Link rel="noopener noreferrer" href={link.href}>
                {link.content}
              </Link>
            ) : (
              <Link rel="noopener noreferrer" href={link.href}>
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>

      <div onClick={toggleMenu} className=" min-[750px]:hidden z-50">
        {!isOpen ? (
          <RiMenuSearchLine className="h-full w-auto p-3 text-violet-300" />
        ) : (
          <CgCloseO className="h-full w-auto p-3 text-violet-300" />
        )}
      </div>

      <span
        className={`${
          isOpen ? "block" : "hidden"
        } fixed inset-0 bg-black/75 w-full h-full z-40 transition-opacity duration-150 ease-in-out`}
        onClick={toggleMenu}
      ></span>
      <div
        className={`${
          isOpen ? "scale-x-100" : "scale-x-0"
        } fixed top-0 mt-[55px] origin-right transition-transform duration-300 ease-in-out right-0 max-w-full w-[220px] bg-[#0B0121]/75 z-50 rounded-lg border-violet-400/25 border-r-0 rounded-r-none border-[1px]`}
      >
        <ul
          className={`flex flex-col w-full h-full justify-between text-white items-center relative`}
        >
          {Object.values(links).map((link, index) => (
            <li
              key={index}
              onClick={toggleMenu}
              className={`w-full hover:text-white/75 px-3 h-full py-6 flex justify-center items-center rounded-b-sm cursor-pointer p-2 text-center`}
            >
              <Link
                rel="noopener noreferrer"
                className="drop-shadow-[0_0_20px_rgba(139,92,246,1)] text-white/95 font-semibold"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
