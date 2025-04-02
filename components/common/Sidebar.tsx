"use client";
import { SidebarLinks } from "@/constants/SidebarLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IconType } from "react-icons";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Include the weights you need
});
type Props = {
  title: string;
  icon: IconType;
  href: string;
};

const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex flex-col overflow-y-scroll w-1/5 h-[90vh] bg-[#ffffff] p-4">
      {SidebarLinks.map((value: Props, id: number) => {
        return (
          <Link
            href={value.href}
            key={id}
            className={`text-[#6B7B93] ${
              pathName === value.href ? "bg-[#F6F5F8] text-[#A414D5]" : ""
            } font-normal hover:bg-[#F6F5F8] px-2 py-2 rounded-2xl flex flex-row justify-start items-center space-x-2 ${dmSans.className}`}
          >
            <div>{value.icon({})}</div>
            <h1>{value.title}</h1>
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
