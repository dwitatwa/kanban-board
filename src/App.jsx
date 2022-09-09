import GroupTask from "./components/GroupTask";
import Header from "./components/Header";

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
    </div>
  );
}

export default App;
