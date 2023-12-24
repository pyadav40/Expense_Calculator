import { createContext, useState } from "react";
import "./App.css";
import AddNewtrans from "./Components/AddNewtrans";
import Balance from "./Components/Balance";
import History from "./Components/History";
import IncExp from "./Components/IncExp";
let Values;
function App() {
  const [obj, setObj] = useState([]);
  const [bal, setBal] = useState(0);
  Values = createContext();
  console.log("App.js", obj);
  return (
    <>
      <Values.Provider value={obj}>
        <div className="h-auto w-screen m-0 p-0 bg-gray-500 flex justify-center items-center">
          <div className="h-auto w-6/12 bg-white p-3">
            <h1 className="text-black text-2xl font-extralight">
              Expense Tracker
            </h1>
            <Balance bal={bal} />
            <IncExp setBal={setBal} />
            <History />
            <AddNewtrans setObj={setObj} obj={obj} />
          </div>
        </div>
      </Values.Provider>
    </>
  );
}

export default App;
export { Values };
