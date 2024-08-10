"use client";

import React, { forwardRef } from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

type DropdownToggleButtonProps = {
  isOpen: boolean;
  toggleDropdown: () => void;
};

const DropdownToggleButton = forwardRef<
  HTMLButtonElement,
  DropdownToggleButtonProps
>(({ isOpen, toggleDropdown }, ref) => {
  return (
    <button
      type="button"
      ref={ref}
      className="flex w-full items-center justify-center gap-x-1.5 rounded-full bg-white p-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:ring-gray-700 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-800"
      id="menu-button"
      aria-expanded={isOpen}
      aria-haspopup="true"
      onClick={toggleDropdown}
    >
      <div className="flex">
        <div className="group relative -mr-1 inline-block">
          <Image
            width="26"
            height="26"
            className="relative z-20 rounded-full border border-white object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
            src="/user-img1.webp"
            alt="user-img"
          />
          <span className="absolute bottom-0.5 right-0.5 z-20 h-[6px] w-[6px] rounded-full border border-white bg-green-500"></span>
        </div>
        <div className="group">
          <Image
            width="26"
            height="26"
            className="relative z-10 rounded-full border border-white object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
            src="/user-img2.webp"
            alt="user-img"
          />
        </div>
      </div>
      <FiChevronDown className="mr-2 h-4 w-4 text-[#7f7f7f] dark:text-gray-400" />
    </button>
  );
});

DropdownToggleButton.displayName = "DropdownToggleButton";

export default DropdownToggleButton;
