import { useContext } from "react";
import { Values } from "../App";
const Balance = ({ bal }) => {
  const consContext = useContext(Values);
  // console.log(consContext);
  return (
    <div>
      <h3 className="text-2xl text-black font-extralight mt-5 uppercase">
        Your Balance
      </h3>
      <h1 className="text-black text-2xl">₹{bal}</h1>
    </div>
  );
};

export default Balance;
