import { NavLink } from "react-router-dom";

import { DASHBOARD, STUDENTS } from "../../../../routes";

import Avatar from "../../utils/Avatar";
import Icon from "../../utils/Icon";

import isRouteActive from "../../../utils/functions/utils/isRouteActive";

import KiranChand from "../../../assets/kiran-chand.png";


const navLinks = [DASHBOARD, STUDENTS];


export default function Sidebar({ isOpen, setIsOpen, sidebarRef }) {

  return (
    <aside
      className={`
        sidebar-cont
        h-full fixed pt-[4.4rem]
        z-20
        overlay-black
        transition-opacity duration-300
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        
      `}
    >
      <div
        ref={sidebarRef}
        className={`
          sidebar
          w-64 h-full p-10 flex flex-col gap-8
          transition-transform duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          bg-gray-800 text-white
        `}
      >
        <div className="profile flex items-center gap-5">
          <Avatar
            className="profile-pic"
            src={KiranChand} 
            alt="profile-picture"
            size={40}
          />
          <div className="username font-semibold">
            Kiran Chand
          </div>
        </div>

        <hr className="divider"/>

        <nav>
          <ul className="space-y-7" onClick={() => setIsOpen(false)}>
            {navLinks.map((navLink, index) => (
              <li key={index} className="nav-link-item">
                <NavLink className="nav-link flex items-center gap-5" to={navLink.pathname}>
                  {isRouteActive(navLink.pathname) ? (
                    <Icon className="text-2xl" icon={navLink.activeIcon}/>
                  ) : (
                    <Icon className="text-2xl" icon={navLink.inactiveIcon}/>
                  )}
                  <span>{navLink.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
