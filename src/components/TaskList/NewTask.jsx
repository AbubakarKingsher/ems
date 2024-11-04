import React from "react";

function AcceptTask({ data }) {
  return (
    <div className="p-5 flex-shrink-0 bg-blue-400 h-[300px] rounded-xl w-[350px]">
      <div className="flex items-center justify-between mb-5">
        <p className=" text-[15px] bg-red-600 px-5 rounded py-1">
          {data.category}
        </p>
        <p className="text-[15px]">{data.date}</p>
      </div>
      <h1 className="text-[22px] mb-2 font-semibold">{data.title}</h1>
      <p className="text-sm">{data.description}</p>
      <div className="mt-7 flex gap-5">
        <button className="py-2 bg-green-600 text-[14px] font-medium px-3 rounded">
          Mark as Completed
        </button>
        <button className="py-2 bg-red-600 text-[14px] font-medium px-3 rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
}

export default AcceptTask;
