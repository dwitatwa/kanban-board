import { createContext, useState } from "react";
import DeleteModal from "../DeleteModal";
import EditModal from "../EditModal";
import Delete from "./Delete";
import MoveLeft from "./MoveLeft";
import MoveRight from "./MoveRight";
import OpenSetting from "./OpenSetting";

export const SettingContext = createContext({});

function SettingModal() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [openSettingModal, setOpenSettingModal] = useState(false);

  return (
    <div className="flex items-center">
      <OpenSetting onClick={() => setOpenSettingModal(!openSettingModal)} />
      <SettingContext.Provider value={{ showDeleteModal, setShowDeleteModal }}>
        <div className="relative -top-4 -left-6">
          <div
            className={`${
              openSettingModal ? "block" : "hidden"
            } absolute top-10 bg-white w-[320px] shadow-md rounded-[8px] py-[8px] z-10`}
          >
            <MoveRight />
            <MoveLeft />
            <EditModal />
            <Delete />
          </div>
        </div>
        <DeleteModal />
      </SettingContext.Provider>
    </div>
  );
}

export default SettingModal;
