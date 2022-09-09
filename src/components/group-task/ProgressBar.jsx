import React from "react";

function ProgressBar({ progress }) {
  return (
    <div className="flex gap-[12px] flex-1">
      <div className="bg-neutral-30 h-[16px]  rounded-full overflow-hidden flex-1">
        <div className="h-[16px] bg-success-main" style={{ width: progress }} />
      </div>
      <img src="/src/assets/checklist.svg" alt="" />
    </div>
  );
}

export default ProgressBar;
