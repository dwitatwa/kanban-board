import { useState, useContext } from "react";
import { SettingContext } from "./action-modal/ActionModal";

function DeleteModal() {
  const [isShow, setIsShow] = useState(false);
  const { showDeleteModal, setShowDeleteModal } = useContext(SettingContext);

  return (
    <>
      <div className={showDeleteModal ? "block" : "hidden"}>
        <div
          className="absolute inset-0 bg-slate-700 opacity-40 w-full h-screen z-40"
          onClick={() => setShowDeleteModal(false)}
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
            <button onClick={() => setShowDeleteModal(false)}>
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
              onClick={() => setShowDeleteModal(false)}
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
