import GroupTask from "./components/group-task/GroupTask";
import Header from "./components/Header";
import DeleteModal from "./components/modal/DeleteModal";

function App() {
  return (
    <div className="font-nunito">
      <Header />
      <hr />
      <div className="p-[24px] flex gap-[16px]">
        <GroupTask color="primary" />
        <GroupTask color="secondary" />
        <GroupTask color="danger" />
        <GroupTask color="success" />
      </div>
      <DeleteModal />
    </div>
  );
}

export default App;
