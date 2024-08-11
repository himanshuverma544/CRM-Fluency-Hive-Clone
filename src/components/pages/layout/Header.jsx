import { Link } from "react-router-dom";

import Avatar from "../../utils/Avatar";

import FluencyHiveLogo from "../../../assets/fluency-hive-logo.webp";

import { DASHBOARD } from "../../../../routes";

import { faker } from '@faker-js/faker';


export default function Header({ isOpen, setIsOpen }) {

  const toggleSidebar = () =>
    setIsOpen(!isOpen);


  return (
    <header className="flex justify-between items-center px-5 py-3 z-30 bg-primaryPurple">

      <div className="wrapper flex items-center gap-10">
        <div className="menu-icon inline-block cursor-pointer" onClick={toggleSidebar}>
          <div className={`
            bar-1
            w-6 h-0.5 my-1.5
            ${isOpen ? "translate-x-0 translate-y-2 -rotate-45" : ""}
            transition-transform duration-500 ease-in-out
            bg-white
          `}/>
          <div className={`
            bar-2
            w-4 h-0.5 my-1.5
            ${isOpen ? "opacity-0" : ""}
            transition-transform duration-500 ease-in-out
            bg-white
          `}/>
          <div className={`
            bar-3
            w-6 h-0.5 my-1.5
            ${isOpen ? "translate-x-0 -translate-y-2 rotate-45" : ""}
            transition-transform duration-500 ease-in-out
            bg-white
          `}/>
        </div>

        <Link className="w-[130px]" to={DASHBOARD.pathname}>
          <img className="size-full" src={FluencyHiveLogo} alt="Fluency Hive Logo"/>
        </Link>
      </div>

      <Avatar
        className="profile-pic"
        src={faker.image.url()} 
        alt="profile-picture"
        size={40}
        component="button"
      />
    </header>
  );
}
