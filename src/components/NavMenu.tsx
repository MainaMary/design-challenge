import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
interface Items {
  path: string;
  label: string | JSX.Element
  icon: ReactNode;
  
}
interface Props {
  arrList: Items[];
  checker? : boolean;
  openModal:boolean;
  handleModal: (x:any) =>void
}

const NavMenu = ({ arrList , openModal, handleModal, checker= true}: Props) => {
    console.log(openModal, 'openModal')
  return (
    <ul className={openModal ? " ease-in-out duration-500 left-0 top-0 bg-white z-20 fixed shadow-md w-[1/2]": "flex h-auto justify-items-end items-center"} style={{width : checker ? '100%' : ''}}>
      {arrList.map(({ label, path, icon }) => (
        <li key={path}>
          <Link to={path} onClick={handleModal} className="flex h-auto justify-items-end items-center px-4">
            <p>{label}</p>
            {icon && <RiArrowDropDownLine />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
