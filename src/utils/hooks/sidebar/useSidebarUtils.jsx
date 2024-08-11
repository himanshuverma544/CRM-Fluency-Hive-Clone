import React from 'react';


export default function useSidebarUtils() {

  const [isOpen, setIsOpen] = React.useState(false);
  const sidebarRef = React.useRef(null);

  const handleClickOutside = event => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const handleEscapePress = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.querySelector('.sidebar-cont').addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapePress);
    }
    return () => {
      document.querySelector('.sidebar-cont').removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapePress);
    };
  }, [isOpen]);

  return ({
    sidebarState: [isOpen, setIsOpen],
    sidebarRef
  });
}
