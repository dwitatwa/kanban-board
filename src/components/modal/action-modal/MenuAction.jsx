import { useRef, useEffect, useContext } from "react";
import Edit from "./Edit";
import Delete from "./Delete";
import MoveLeft from "./MoveLeft";
import MoveRight from "./MoveRight";
import { GroupTaskContext } from "../../group-task/GroupTask";

function MenuAction({ setOpenActionModal }) {
  const modalRef = useRef(null);
  const position = useContext(GroupTaskContext);

  const outsideClick = (e) => {
    if (e.target !== modalRef.current && e.target.id !== "settingButton") {
      setOpenActionModal(false);
      console.log("render");
    }
  };

  useEffect(() => {
    document.addEventListener("click", outsideClick);
    return () => {
      document.removeEventListener("click", outsideClick);
    };
  }, []);

  return (
    <div className="relative -top-4 -left-6">
      <div
        className="absolute top-10 bg-white w-[320px] shadow-md rounded-[8px] py-[8px] z-10"
        ref={modalRef}
      >
        {position === "last" || <MoveRight />}
        {position === "first" || <MoveLeft />}
        <Edit />
        <Delete />
      </div>
    </div>
  );
}

export default MenuAction;
