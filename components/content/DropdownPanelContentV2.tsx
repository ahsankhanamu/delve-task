import React, { useState, useEffect } from "react";
import { MdOutlineAdd } from "react-icons/md";
import { Friends } from "@/lib/icons";
import { BsLightningChargeFill } from "react-icons/bs";
import MenuItem from "@/components/MenuItemV2";
import ToggleSwitch from "@/components/ToggleSwitch";
import Image from "next/image";
import {
  MdSupportAgent,
  MdOutlineLayers,
  MdOutlineAppShortcut,
  MdStarBorder,
  MdOutlineSettings,
} from "react-icons/md";
import { USERS } from "@/lib/data";

const DropdownPanelContent = () => {
  // Initialize checkboxes state based on the dynamic users array
  const [checkboxes, setCheckboxes] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Set initial checkbox states based on the user data
    const initialCheckboxState = USERS.reduce(
      (acc, user) => {
        acc[user.id] = user.isOnline; // default value
        return acc;
      },
      {} as Record<string, boolean>,
    );

    setCheckboxes(initialCheckboxState);
  }, []);

  const handleCheckboxChange = (id: string) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [id]: !prevCheckboxes[id],
    }));
  };

  return (
    <>
      <div
        className="flex w-full flex-col gap-y-1.5 px-3 py-2 text-sm text-gray-700 dark:text-gray-300"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <ul className="flex w-full flex-col gap-y-1.5">
          {USERS.map(({ id, name, image, isOnline }) => (
            <li
              className="flex w-full cursor-pointer items-center justify-between"
              onClick={() => handleCheckboxChange(id)}
              key={id}
            >
              <div className="flex items-center">
                <div
                  className="relative inline-block"
                  data-el-name="user-image"
                >
                  <Image
                    width="30"
                    height="30"
                    className="relative rounded-full border-2 border-white object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105"
                    src={image}
                    alt={name}
                  />
                  {isOnline && (
                    <span className="absolute bottom-0.5 right-0.5 h-[6px] w-[6px] rounded-full border border-white bg-green-500"></span>
                  )}
                </div>
                <span className="ml-1">{name}</span>
              </div>
              <ToggleSwitch
                checked={checkboxes[id]}
                onChange={() => handleCheckboxChange(id)}
              />
            </li>
          ))}
        </ul>
        <div className="mt-1 flex w-full justify-center text-sm">
          <button className="flex w-full items-center justify-center gap-x-2 rounded-md bg-white px-3 py-2 font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:ring-gray-600 dark:hover:bg-gray-600 dark:focus:ring-offset-gray-800">
            <span className="text-argent text-lg dark:text-gray-400">
              <MdOutlineAdd />
            </span>

            <span className="">New team</span>
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
        <MenuItem id="2" icon={<MdOutlineSettings />}>
          Settings
        </MenuItem>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem
          id="3"
          icon={<BsLightningChargeFill />}
          colorClass="text-outrageous-orange dark:text-outrageous-orange"
        >
          Upgrade to Pro
        </MenuItem>
      </div>
      <div
        className="py-1 text-sm text-gray-700 dark:text-gray-300"
        role="none"
      >
        <MenuItem id="4" icon={<MdOutlineAppShortcut />}>
          Mobile App
        </MenuItem>
        <MenuItem id="5" icon={<MdStarBorder />}>
          Updates
        </MenuItem>
        <MenuItem id="6" icon={<MdSupportAgent />}>
          Support
        </MenuItem>
      </div>
    </>
  );
};

export default DropdownPanelContent;
