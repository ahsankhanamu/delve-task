import React from "react";

function ButtonSlide() {
  return (
    <button className="rounded-lg bg-white p-1 text-xl text-black hover:bg-gray-200 focus:bg-gray-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 dark:bg-gray-800 dark:text-[#feffff] dark:ring-gray-700 dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:ring-offset-gray-800">
      <div className="relative flex items-center justify-center">
        <div
          className="from-linear-lime-start to-linear-lime-end absolute left-0 right-0 my-auto h-full w-20 rounded-lg bg-gradient-to-t px-6 py-3 transition-all duration-300 hover:w-full"
          style={{
            boxSizing: "border-box",
          }}
        >
          <span className="react-loading-skeleton maskChevronRight flex h-full items-center gap-x-1 bg-clip-content text-4xl text-transparent"></span>
        </div>
        <div className="mx-1 py-4 pl-28 pr-5">Book a demo</div>
      </div>
    </button>
  );
}

export default ButtonSlide;
