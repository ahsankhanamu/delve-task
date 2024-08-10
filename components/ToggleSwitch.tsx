import React from "react";

interface ToggleSwitchProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

function ToggleSwitch({ checked = false, onChange }: ToggleSwitchProps) {
  const handleChange = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={handleChange}
      />
      <div className="peer-checked:bg-outrageous-orange peer relative h-5 w-9 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white rtl:peer-checked:after:-translate-x-full dark:border-gray-600 dark:bg-gray-700" />
      <span className="sr-only ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle me
      </span>
    </label>
  );
}

export default ToggleSwitch;
