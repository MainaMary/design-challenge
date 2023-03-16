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
  checker? : boolean
}

const NavMenu = ({ arrList , checker= true}: Props) => {
  return (
    <ul className="flex h-auto justify-items-end items-center" style={{width : checker ? '100%' : ''}}>
      {arrList.map(({ label, path, icon }) => (
        <li key={path}>
          <Link to={path} className="flex h-auto justify-items-end items-center px-4">
            <p>{label}</p>
            {icon && <RiArrowDropDownLine />}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavMenu;
