import { MdDashboard } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";

import { PiStudentFill } from "react-icons/pi";
import { PiStudentDuotone } from "react-icons/pi";


export const DASHBOARD = {
  label: "Dashboard",
  pathname: "/",
  activeIcon: MdDashboard,
  inactiveIcon: MdOutlineDashboard
}

export const STUDENTS = {
  label: "Students",
  pathname: "/students",
  activeIcon: PiStudentFill,
  inactiveIcon: PiStudentDuotone
}

export const LOGIN = {
  pathname: "/login"
}

export const PAGE404 = {
  pathname: "*"
}