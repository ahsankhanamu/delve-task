import React from "react";

function Friends() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="1em"
      height="1em"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
    >
      <circle
        r={45}
        cx={50}
        cy={50}
        stroke="currentColor"
        fill="none"
        strokeWidth={6}
      />

      <path
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(15, 18) scale(0.70)"
        d="M6,63.9V85h23.6c1.4,0,2.5,1.1,2.5,2.5S31,90,29.6,90H3.5C2.1,90,1,88.9,1,87.5V63.9  c0-9.2,7.5-16.7,16.7-16.7h17c1.4,0,2.5,1.1,2.5,2.5s-1.1,2.5-2.5,2.5h-17C11.2,52.2,6,57.4,6,63.9z M48.4,26.9  c0-9.3-7.6-16.9-16.9-16.9c-9.3,0-16.9,7.6-16.9,16.9s7.6,16.9,16.9,16.9C40.8,43.8,48.4,36.3,48.4,26.9z M31.5,38.8  c-6.6,0-11.9-5.3-11.9-11.9S24.9,15,31.5,15s11.9,5.3,11.9,11.9S38,38.8,31.5,38.8z"
      />
      <path
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(15, 18) scale(0.70)"
        fill="currentColor"
        d="M80.5,26.9  c0,6.6-5.3,11.9-11.9,11.9s-11.9-5.3-11.9-11.9S62,15,68.5,15S80.5,20.4,80.5,26.9z M99,87.5V63.9c0-9.2-7.5-16.7-16.7-16.7H54.8  c-9.2,0-16.7,7.5-16.7,16.7v23.6c0,1.4,1.1,2.5,2.5,2.5h55.9C97.9,90,99,88.9,99,87.5z"
      />
    </svg>
  );
}

export default Friends;
