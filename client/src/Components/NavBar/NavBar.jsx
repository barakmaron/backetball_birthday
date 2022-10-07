import React from 'react';
import { useLocation } from 'react-router-dom';


const NavBar = ({ routes }) => {
  const location = useLocation();

  return (
    <nav dir='rtl' className="flex w-full bg-orange-500 py-4 gap-5 items-center justify-center text-white text-lg font-bold">
      {routes.map(route => {
        return <a key={`navbar-${route.location}`}
        className={
          location.pathname === route.location ? 
            `border-b-2 border-white text-white py-2` :
            `border-b-2 hover:border-white text-white py-2 border-transparent `
        } href={route.location}>{route.label}</a>;
      })}
    </nav>
  )
};

export default NavBar;
