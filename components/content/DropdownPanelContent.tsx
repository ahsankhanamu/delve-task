"use client";

import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Friends } from "@/lib/icons";
import { BsLightningChargeFill } from "react-icons/bs";
import MenuItem from "@/components/MenuItem";
import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";
import {
  MdSupportAgent,
  MdOutlineLayers,
  MdOutlineAppShortcut,
  MdStarBorder,
  MdOutlineSettings,
} from "react-icons/md";

type CheckboxState = {
  pixsellz: boolean;
  jackReed: boolean;
};

type DropdownPanelContentProps = {
  checkboxes: CheckboxState;
  handleCheckboxChange: (name: keyof CheckboxState) => void;
};

const DropdownPanelContent = ({
  checkboxes,
  handleCheckboxChange,
}: DropdownPanelContentProps) => {
  return (
    <>
      <div
        className="flex w-full flex-col gap-y-1.5 px-3 py-2 text-xs text-gray-700 dark:text-gray-300"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <ul className="flex w-full flex-col gap-y-1.5">
          <li
            className="flex w-full cursor-pointer items-center justify-between"
            onClick={() => handleCheckboxChange("pixsellz")}
          >
            <div className="flex items-center">
              <div className="relative inline-block" data-el-name="user-image">
                <Image
                  width="26"
                  height="26"
                  className="relative rounded-full border-2 border-white object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
                  src="/user-img1.webp"
                  alt="user-img"
                />
                <span className="absolute bottom-0.5 right-0.5 h-[6px] w-[6px] rounded-full border border-white bg-green-500"></span>
              </div>
              <span className="ml-1">Pixsellz</span>
            </div>
            <ToggleSwitch
              checked={checkboxes.pixsellz}
              onChange={() => handleCheckboxChange("pixsellz")}
            />
          </li>
          <li
            className="flex w-full cursor-pointer items-center justify-between"
            onClick={() => handleCheckboxChange("jackReed")}
          >
            <div className="flex items-center">
              <Image
                width="26"
                height="26"
                className="relative rounded-full border-2 border-white object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
                src="/user-img2.webp"
                alt="user-img"
              />
              <span className="ml-1">Jack Reed</span>
            </div>
            <ToggleSwitch
              checked={checkboxes.jackReed}
              onChange={() => handleCheckboxChange("jackReed")}
            />
          </li>
        </ul>
        <div className="mt-1 flex w-full justify-center">
          <button className="flex w-full items-center justify-center gap-x-2 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
            <MdOutlineAdd className="text-argent dark:text-gray-400" />
            <span className="text-xs">New team</span>
          </button>
        </div>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem id="0" icon={<Friends />}>
          Invite friends
        </MenuItem>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem id="1" icon={<MdOutlineLayers />}>
          Integrations
        </MenuItem>
        <MenuItem id="1" icon={<MdOutlineSettings />}>
          Settings
        </MenuItem>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem
          id="1"
          icon={<BsLightningChargeFill />}
          menuClass="text-outrageous-orange dark:text-outrageous-orange"
        >
          Upgrade to Pro
        </MenuItem>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem id="1" icon={<MdOutlineAppShortcut />}>
          Mobile App
        </MenuItem>
        <MenuItem id="1" icon={<MdStarBorder />}>
          Updates
        </MenuItem>
        <MenuItem id="1" icon={<MdSupportAgent />}>
          Support
        </MenuItem>
      </div>
    </>
  );
};

export default DropdownPanelContent;
