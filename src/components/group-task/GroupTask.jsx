import { createContext, useState } from "react";
import Content from "./Content";
import GroupLabel from "./GroupLabel";
import NoContent from "./NoContent";
import useTempStorage from "../../hooks/useTempStorage";

export const GroupTaskContext = createContext({});

function GroupTask({ id, position }) {
  const [data, setData] = useTempStorage(`group-task-${id}`, []);
  const setColor = (color) => {
    if (color === "primary") return "grouptask grouptask--primary";
    if (color === "secondary") return "grouptask grouptask--secondary";
    if (color === "danger") return "grouptask grouptask--danger";
    if (color === "success") return "grouptask grouptask--success";
  };

  const addData = () => {
    setData([...data, 2]);
  };

  return (
    <GroupTaskContext.Provider value={position}>
      <div className={setColor("primary")}>
        <GroupLabel color={"primary"} title={`GroupTask ${id}`} />
        <h2 className="font-[700] mb-[8px] text-neutral-90 text-[12px] leading-[20px]">
          January - March
        </h2>
        {data.map((item, index) => (
          <Content progress="70%" key={index} />
        ))}
        {data.length === 0 && <NoContent />}

        <button
          className="flex text-[14px] font-[400] gap-[6.67px]"
          onClick={addData}
        >
          <img src="/src/assets/plus-btn.svg" alt="" />
          New Task
        </button>
      </div>
    </GroupTaskContext.Provider>
  );
}

export default GroupTask;
