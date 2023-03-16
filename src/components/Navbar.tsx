import React,{useState} from "react";
import { FaStarOfLife } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
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
const [openModal, setOpenModal] = useState<boolean>(false)
const handleModal = () =>{
    setOpenModal(prev => !prev)
}
  return (
    <nav className="bg-navy-blue flex px-12 md:px-16 text-white justify-between h-16 items-center">
      <div className="flex h-auto items-center">
        <FaStarOfLife size={36} />
        <p className="text-2xl ml-2 font-semibold">Refersion</p>
      </div>
      <div className=" hidden md:block">
        <NavMenu arrList={menuItems} openModal={openModal} handleModal={handleModal}/>
      </div>
      <div className=" hidden md:flex  justify-items-end w-[1/2%]">
        <NavMenu arrList={leftMenuItems} checker openModal={openModal} handleModal={handleModal} />
      </div>
      <div className="block md:hidden" onClick={handleModal} >
        {openModal ? <IoMdClose /> :<FaBars/>}
      </div>
    </nav>
  );
};

export default Navbar;
