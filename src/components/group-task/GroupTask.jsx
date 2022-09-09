import React from "react";
import Content from "./Content";
import GroupLabel from "./GroupLabel";

function GroupTask({ color }) {
  const setColor = (color) => {
    if (color === "primary") return "grouptask grouptask--primary";
    if (color === "secondary") return "grouptask grouptask--secondary";
    if (color === "danger") return "grouptask grouptask--danger";
    if (color === "success") return "grouptask grouptask--success";
  };

  return (
    <div className={setColor(color)}>
      <GroupLabel color={color} />
      <h2 className="font-[700] mb-[8px] text-neutral-90 text-[12px] leading-[20px]">
        January - March
      </h2>
      <Content progress="70%" />
      <button className="flex text-[14px] font-[400] gap-[6.67px]">
        <img src="/src/assets/plus-btn.svg" alt="" />
        New Task
      </button>
    </div>
  );
}

export default GroupTask;
