import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1c5d58ef] p-4 sticky top-0">
      <h1 className="text-white text-3xl font-bold">
        <Link to="/">Task Manager</Link>
      </h1>
    </nav>
  );
};

export default Navbar;
