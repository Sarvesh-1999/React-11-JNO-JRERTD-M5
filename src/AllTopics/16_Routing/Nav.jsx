// import React from "react";

// const Nav = ({ setPath }) => {
//   return (
//     <header className="p-5 bg-violet-600 text-white font-bold">
//       <nav className="flex gap-10">
//         <div onClick={() => setPath("/")}>Home</div>
//         <div onClick={() => setPath("/about")}>About</div>
//       </nav>
//     </header>
//   );
// };

// export default Nav;

// ! USING ROUTING - REACT ROUTER DOM
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <header className="p-5 bg-violet-600 text-white font-bold">
      <nav className="flex gap-10">
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}

        <NavLink 
        className={({isActive})=>`${isActive && 'bg-white text-black'} transition ease-in py-1 px-3 rounded`} 
        to="/">
          Home
        </NavLink>

        <NavLink 
        className={({isActive})=>`${isActive && 'bg-white text-black'} transition ease-in py-1 px-3 rounded`}
        to="/about">
          About
        </NavLink>

      </nav>
    </header>
  );
};

export default Nav;
