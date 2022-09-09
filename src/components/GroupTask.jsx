import React from "react";
import Content from "./Content";

function GroupTask({ color }) {
  return (
    <div
      className={`w-fit border border-${color}-main bg-${color}-surface pl-[16px] pr-[12px] py-[16px] rounded-[4px]`}
    >
      <div
        className={`border border-${color}-border text-${color}-main w-fit px-[8px] py-[2px] text-[12px] font-[400] rounded-[4px] mb-[10px]`}
      >
        Group Task 1
      </div>
      <h2 className="font-[700] mb-[8px] text-neutral-90 text-[12px] leading-[20px]">
        January - March
      </h2>
      <Content />
      <button className="flex text-[14px] font-[400] gap-[6.67px]">
        <img src="/src/assets/plus-btn.svg" alt="" />
        New Task
      </button>
    </div>
  );
}

export default GroupTask;
