import { createContext, useState } from "react";
import DeleteModal from "../DeleteModal";
import MenuAction from "./MenuAction";
import OpenAction from "./OpenAction";

export const SettingContext = createContext({});

function ActionModal() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [openActionModal, setOpenActionModal] = useState(false);

  return (
    <div className="flex items-center">
      <OpenAction onClick={() => setOpenActionModal(!openActionModal)} />
      <SettingContext.Provider value={{ showDeleteModal, setShowDeleteModal }}>
        {openActionModal && (
          <MenuAction setOpenActionModal={setOpenActionModal} />
        )}
        <DeleteModal />
      </SettingContext.Provider>
    </div>
  );
}

export default ActionModal;
