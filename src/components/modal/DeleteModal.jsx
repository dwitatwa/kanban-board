import React, { useState } from "react";

function DeleteModal() {
  const [isShow, setIsShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsShow(true)}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="flex gap-[18px]"
      >
        <svg
          width="18"
          height="20"
          viewBox="0 0 18 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={
            isHover
              ? "fill-danger-main stroke-danger-main"
              : "fill-utilities-fontColor stroke-utilities-fontColor"
          }
        >
          <path d="M12.5 4V4.5H13H17C17.1326 4.5 17.2598 4.55268 17.3536 4.64645C17.4473 4.74021 17.5 4.86739 17.5 5C17.5 5.13261 17.4473 5.25979 17.3536 5.35355C17.2598 5.44732 17.1326 5.5 17 5.5H16H15.5V6V17C15.5 17.663 15.2366 18.2989 14.7678 18.7678C14.2989 19.2366 13.663 19.5 13 19.5H5C4.33696 19.5 3.70107 19.2366 3.23223 18.7678C2.76339 18.2989 2.5 17.663 2.5 17V6V5.5H2H1C0.867392 5.5 0.740215 5.44732 0.646446 5.35355C0.552678 5.25979 0.5 5.13261 0.5 5C0.5 4.86739 0.552678 4.74021 0.646446 4.64645C0.740215 4.55268 0.867392 4.5 1 4.5H5H5.5V4V3C5.5 2.33696 5.76339 1.70107 6.23223 1.23223C6.70107 0.763392 7.33696 0.5 8 0.5H10C10.663 0.5 11.2989 0.763392 11.7678 1.23223C12.2366 1.70107 12.5 2.33696 12.5 3V4ZM11 4.5H11.5V4V3C11.5 2.60217 11.342 2.22064 11.0607 1.93934C10.7794 1.65804 10.3978 1.5 10 1.5H8C7.60218 1.5 7.22064 1.65804 6.93934 1.93934C6.65804 2.22064 6.5 2.60217 6.5 3V4V4.5H7H11ZM4 5.5H3.5V6V17C3.5 17.3978 3.65804 17.7794 3.93934 18.0607C4.22064 18.342 4.60218 18.5 5 18.5H13C13.3978 18.5 13.7794 18.342 14.0607 18.0607C14.342 17.7794 14.5 17.3978 14.5 17V6V5.5H14H4ZM7.35355 15.3536C7.25979 15.4473 7.13261 15.5 7 15.5C6.86739 15.5 6.74021 15.4473 6.64645 15.3536C6.55268 15.2598 6.5 15.1326 6.5 15V9C6.5 8.86739 6.55268 8.74022 6.64645 8.64645C6.74022 8.55268 6.86739 8.5 7 8.5C7.13261 8.5 7.25978 8.55268 7.35355 8.64645C7.44732 8.74022 7.5 8.86739 7.5 9V15C7.5 15.1326 7.44732 15.2598 7.35355 15.3536ZM11.3536 15.3536C11.2598 15.4473 11.1326 15.5 11 15.5C10.8674 15.5 10.7402 15.4473 10.6464 15.3536C10.5527 15.2598 10.5 15.1326 10.5 15V9C10.5 8.86739 10.5527 8.74022 10.6464 8.64645C10.7402 8.55268 10.8674 8.5 11 8.5C11.1326 8.5 11.2598 8.55268 11.3536 8.64645C11.4473 8.74022 11.5 8.86739 11.5 9V15C11.5 15.1326 11.4473 15.2598 11.3536 15.3536Z" />
        </svg>
        <p
          className={isHover ? "text-danger-main" : "text-utilities-fontColor"}
        >
          Delete
        </p>
      </button>
      <div className={isShow ? "block" : "hidden"}>
        <div
          className="absolute inset-0 bg-slate-700 opacity-40 w-full h-screen z-40"
          onClick={() => setIsShow(false)}
        />
        <div className="absolute z-50 bg-white inset-0 w-[420px] h-[188px] m-auto rounded-[10px] p-[24px]">
          <div className="flex items-center gap-[8px] text-[18px] font-[700] text-neutral-100 mb-[18px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
                stroke="#E11428"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex-1">Delete Task</div>
            <button onClick={() => setIsShow(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#404040"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#404040"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <p className="text-[14px] font-[400] mb-[16px]">
            Are you sure want to delete this task? your action can’t be
            reverted.
          </p>
          <div className="flex gap-[10px] justify-end">
            <button
              onClick={() => setIsShow(false)}
              className=" shadow border border-neutral-40 py-[4px] px-[16px] rounded-[8px] text-[14px] font-[700]"
            >
              Cancel
            </button>
            <button className="bg-danger-main text-white py-[4px] px-[16px] rounded-[8px] text-[14px] font-[700]">
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeleteModal;
