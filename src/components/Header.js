import React, { useContext } from "react";

// sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import icon

import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div className="bg-pink-200">
      <div>header</div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex relative"
      >
        <BsBag className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
