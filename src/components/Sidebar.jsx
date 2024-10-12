import React, { useContext } from "react";
import { Link } from "react-router-dom";

// import icons
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash } from "react-icons/fi";

// import components
import CartItem from "./CartItem";

// import sidebar context
import { SidebarContext } from "../contexts/SidebarContext";

// import cart context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total } = useContext(CartContext);

  console.log(cart);
  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      {/* head of cart item */}
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>

        {/* icon */}
        <div
          onClick={handleClose}
          className="'cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* showing item in cart */}
      <div className="flex flex-col gap-y-2 h-[520px] lg:[540px] overflow-y-auto overflow-x-hidden border-b bg-red-500">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4 ">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold bg-red-500">
            <span className="mr-2">Total : </span> $
            {parseFloat(total).toFixed(2)}
          </div>

          {/* clear cart icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-rose-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
