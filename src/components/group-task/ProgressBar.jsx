import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="flex gap-[12px] flex-1">
      <div className="bg-neutral-30 h-[16px]  rounded-full overflow-hidden flex-1">
        <div className="h-[16px] bg-success-main" style={{ width: progress }} />
      </div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_2473_249)">
          <path
            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
            fill="#43936C"
          />
          <path
            d="M5.6001 7.89098L7.2001 9.49098L10.2911 6.40002"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2473_249">
            <rect
              width="16"
              height="16"
              fill="white"
              transform="translate(0 16) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default ProgressBar;
