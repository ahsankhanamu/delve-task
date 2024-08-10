import React, { forwardRef } from "react";

type DropdownPanelProps = {
  isOpen: boolean;
  children: React.ReactNode;
};

const DropdownPanel = forwardRef<HTMLDivElement, DropdownPanelProps>(
  ({ isOpen, children }, ref) => {
    return (
      <div
        ref={ref}
        className={`transform transition-all duration-300 ease-out ${
          isOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none hidden scale-95 opacity-0"
        } absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none dark:divide-gray-700 dark:bg-gray-800 dark:ring-opacity-10`}
      >
        {children}
      </div>
    );
  },
);

DropdownPanel.displayName = "DropdownPanel";
export default DropdownPanel;
