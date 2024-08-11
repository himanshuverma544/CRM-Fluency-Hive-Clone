import { useLocation } from "react-router-dom";


export default function isRouteActive(pathname) {

  const location = useLocation();
  const isActive = () => location.pathname === pathname;

  return isActive;
}