import React from "react";

function CompleteTask({ data }) {
  return (
    <div className="p-5 flex-shrink-0 bg-green-400 h-[300px] rounded-xl w-[350px]">
      <div className="flex items-center justify-between mb-5">
        <p className=" text-[15px] bg-red-600 px-5 rounded py-1">
          {data.category}
        </p>
        <p className="text-[15px]">{data.date}</p>
      </div>
      <h1 className="text-[22px] mb-2 font-semibold">{data.title}</h1>
      <p className="text-sm">{data.description}</p>
      <div className="mt-7 text-center">
        <button className="bg-green-600 py-2 w-full font-medium rounded">
          Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask;
