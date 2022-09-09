import React from "react";

function ProgressBar() {
  return (
    <div className="flex gap-[12px] flex-1">
      <div className="bg-neutral-30 h-[16px]  rounded-full overflow-hidden flex-1">
        <div className="w-[100%] h-[16px] bg-success-main" />
      </div>
      <img src="/src/assets/checklist.svg" alt="" />
    </div>
  );
}

export default ProgressBar;
