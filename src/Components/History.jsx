import { useContext } from "react";
import { Values } from "../App";
import AllAmount from "./AllAmount";
const History = () => {
  const consContext = useContext(Values);
  console.log("Histry", consContext);
  return (
    <>
      <div className="border-b-2 border-black mt-4">
        <h1 className="text-2xl text-black font-extralight p-2">History</h1>
      </div>
      {consContext && consContext.length > 0 ? (
        consContext.map((ele, i) => {
          return <AllAmount key={i} ele={ele} />;
        })
      ) : (
        <p className="text-black">No history available</p>
      )}
    </>
  );
};

export default History;
