import '../App.css';

import { Outlet } from 'react-router-dom';

import Header from '../components/pages/layout/Header';
import Footer from '../components/pages/layout/Footer';
import Sidebar from '../components/pages/layout/Sidebar';

import useSidebarUtils from '../utils/hooks/sidebar/useSidebarUtils';


export default function Layout() {

  const { sidebarState: [isOpen, setIsOpen], sidebarRef } = useSidebarUtils();

  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} sidebarRef={sidebarRef} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
