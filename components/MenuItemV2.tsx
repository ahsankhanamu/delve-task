import React, { ReactElement, ReactNode } from "react";
import clsx from "clsx";

function MenuItem({
  id,
  icon,
  children,
  colorClass,
}: {
  id: string;
  icon: ReactElement;
  children: ReactNode;
  colorClass?: string;
}) {
  const baseClasses =
    "flex items-center px-3 py-2 transition-all hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-200 dark:focus:bg-gray-600";
  const className = clsx(
    baseClasses,
    colorClass
      ? colorClass
      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white",
  );
  return (
    <a
      href="#"
      className={className}
      role="menuitem"
      tabIndex={-1}
      id={`menu-item-${id}`}
    >
      <span className="text-lg">{icon}</span>
      <div className="ml-3 w-full transition-all hover:ml-4">{children}</div>
    </a>
  );
}

export default MenuItem;
