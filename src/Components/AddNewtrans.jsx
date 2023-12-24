import { useState } from "react";

const AddNewtrans = ({ setObj, obj }) => {
  const [absVal, setAbs] = useState({ heading: "", amount: 0 });
  // console.log(absVal);
  return (
    <>
      <div className="border-b-2 border-black mt-4">
        <h1 className="text-2xl text-black font-extralight p-2">
          Add New Transaction
        </h1>
      </div>
      <div className="mt-4">
        <input
          onChange={(e) =>
            setAbs({ ...absVal, [e.target.name]: e.target.value })
          }
          name="heading"
          type="text"
          placeholder="text"
          className="w-full h-10 p-2 bg-white text-black"
        />
      </div>
      <div className="mt-4">
        <input
          onChange={(e) =>
            setAbs({ ...absVal, [e.target.name]: e.target.value })
          }
          name="amount"
          type="number"
          placeholder="Type Income/Expense"
          className="w-full h-10 p-2 bg-white text-blue-950 bg-transparent"
        />
      </div>
      <div
        onClick={() => setObj([...obj, absVal])}
        role="button"
        className="h-12 w-full bg-purple-800 rounded-md flex justify-center items-center mt-4"
      >
        <h1 className="text-lg">Add Transaction</h1>
      </div>
    </>
  );
};

export default AddNewtrans;
