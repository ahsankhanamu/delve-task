import React from "react";

function ArrowDotsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 24 30"
      enableBackground="new 0 0 24 30"
    >
      <circle
        id="myCircle"
        cx={3}
        cy={3}
        r={2}
        stroke="#e7e7e7"
        fill="none"
        strokeWidth={1}
      />
      <use href="#myCircle" x={0} y={0} />
      <use href="#myCircle" x={6} y={0} />
      <use href="#myCircle" x={6} y={6} />
      <use href="#myCircle" x={12} y={6} />
      {/* center piece */}
      <use href="#myCircle" x={12} y={12} />
      <use href="#myCircle" x={18} y={12} />
      {/* reversing */}
      <use href="#myCircle" x={6} y={18} />
      <use href="#myCircle" x={12} y={18} />
      <use href="#myCircle" x={0} y={24} />
      <use href="#myCircle" x={6} y={24} />
    </svg>
  );
}

export default ArrowDotsIcon;
