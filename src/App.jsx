import GroupTask from "./components/group-task/GroupTask";
import Header from "./components/Header";

const data = [1, 2, 3, 4];

function App() {
  return (
    <div className="font-nunito">
      <Header />
      <hr />
      <div className="p-[24px] flex gap-[16px]">
        {data.map((item, index) => {
          if (index === 0)
            return (
              <GroupTask
                id={item}
                color="primary"
                position="first"
                key={item}
              />
            );
          if (index === data.length - 1)
            return (
              <GroupTask id={item} color="primary" position="last" key={item} />
            );
          return (
            <GroupTask id={item} color="primary" position="center" key={item} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
