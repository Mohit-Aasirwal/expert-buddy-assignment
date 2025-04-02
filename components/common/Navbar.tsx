import { NavbarLinks } from "@/constants/NavbarLinks";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[10vh] bg-white  shadow-xl flex flex-row justify-between items-center">
      <Image
        src="/logo.svg"
        alt="Expert Buddy"
        width={100}
        height={100}
        className="ml-4"
      />
      <div className="flex flex-row space-x-4 mr-4">
        {NavbarLinks.map((value, id: number) => {
          return (
            <span
              key={id}
              className="text-[#6B7B93] hover:text-[#A414D5] font-semibold"
            >
              {value.title}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
