import { useContext } from "react";
import { Values } from "../App";
import { filterArr, reduceArr, filterArrExp } from "../Utility/utili";
const IncExp = ({ setBal }) => {
  const consContext = useContext(Values);
  console.log("inc/exc", consContext);
  const Filtincome = filterArr(consContext);
  const Filtexp = filterArrExp(consContext);
  const exp = reduceArr(Filtexp);
  const income = reduceArr(Filtincome);
  setBal(exp + income);
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="flex justify-center items-center shadow-lg shadow-slate-300 border-gray-200 bg-white h-24 w-4/5">
        <div className="w-1/2 flex justify-center items-center flex-col border-r-2 border-slate-800">
          <h1 className="text-black text-2xl uppercase">Income</h1>
          <h6 className="text-green-400 text-lg">₹{income}</h6>
        </div>
        <div className="w-1/2 flex justify-center items-center flex-col">
          <h1 className="text-black text-2xl uppercase">Expense</h1>
          <h6 className="text-red-400 text-lg">₹{exp}</h6>
        </div>
      </div>
    </div>
  );
};

export default IncExp;
