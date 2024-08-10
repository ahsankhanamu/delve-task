"use client";

import React, { useState, useRef } from "react";
import { useClickOutside } from "@/lib/hooks";
import DropdownToggleButton from "@/components/DropdownToggleButton";
import DropdownPanelContent from "../../components/content/DropdownPanelContent";
import DropdownPanel from "@/components/DropDownPanel";
import ButtonSlide from "@/components/ButtonSlide";

type CheckboxState = {
  pixsellz: boolean;
  jackReed: boolean;
};

function ClientPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [checkboxes, setCheckboxes] = useState<CheckboxState>({
    pixsellz: true,
    jackReed: false,
  });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCheckboxChange = (name: keyof CheckboxState) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: !prevCheckboxes[name],
    }));
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Close dropdown if clicking outside of it and the button
  useClickOutside([dropdownRef, buttonRef], () => {
    setIsOpen(false);
  });

  return (
    <>
      {/* Grid Layout for Components */}
      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="flex justify-center">
          <ButtonSlide />
        </div>
        <div className="flex justify-center">
          <div className="relative inline-block text-left">
            <DropdownToggleButton
              isOpen={isOpen}
              toggleDropdown={toggleDropdown}
              ref={buttonRef}
            />
            <DropdownPanel isOpen={isOpen} ref={dropdownRef}>
              <DropdownPanelContent
                checkboxes={checkboxes}
                handleCheckboxChange={handleCheckboxChange}
              />
            </DropdownPanel>
          </div>
        </div>
      </div>
    </>
  );
}

export default ClientPage;
