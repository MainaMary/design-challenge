import React from "react";
import { FaStarOfLife } from "react-icons/fa";
import NavMenu from "./NavMenu";
import { menuItems } from "../utils/constants";
import DefaultButton from "./DefaultButton";
const leftMenuItems = [
  {
    label: "Support",
    path: "/support",
    icon: false,
  },
  {
    label: "Sign in",
    path: "/sign",
    icon: true,
  },
  {
    label: (
      <DefaultButton color className="bg-dark-green w-full">
        Get started
      </DefaultButton>
    ),
    path: "/signUp",
    icon: false,
  },
];

const Navbar = () => {
  return (
    <nav className="bg-navy-blue flex px-16 text-white justify-between h-16 items-center">
      <div className="flex h-auto items-center">
        <FaStarOfLife size={36} />
        <p className="text-2xl ml-2 font-semibold">Refersion</p>
      </div>
      <div>
        <NavMenu arrList={menuItems} />
      </div>
      <div className="flex  justify-items-end w-[1/2%]">
        <NavMenu arrList={leftMenuItems} checker />
      </div>
    </nav>
  );
};

export default Navbar;
