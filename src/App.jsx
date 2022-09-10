import { useEffect, useState } from "react";
import GroupTask from "./components/group-task/GroupTask";
import Header from "./components/Header";

// const data = [1, 2, 3, 4, 5];

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {}, []);

  return (
    <div className="font-nunito">
      <Header />
      <div className="px-[24px] pb-[24px] pt-[88px] flex gap-[16px] w-fit">
        {data.map((item, index) => {
          if (index === 0)
            return <GroupTask id={item} position="first" key={item} />;
          if (index === data.length - 1)
            return <GroupTask id={item} position="last" key={item} />;
          return <GroupTask id={item} position="center" key={item} />;
        })}
      </div>
    </div>
  );
}

export default App;
