import React from "react";

function TasksNumbers({ data }) {
  return (
    <div className="flex gap-5 items-center">
      <div className="py-4 h-[100px] w-[25%] font-semibold px-5 bg-blue-400 rounded-lg ">
        <p className="text-[25px]">{data.taskCount.active}</p> New Task
      </div>
      <div className="py-4 h-[100px] w-[25%] font-semibold px-5 bg-green-400 rounded-lg ">
        <p className="text-[25px]">{data.taskCount.completed}</p> Completed Task
      </div>
      <div className="py-4 h-[100px] w-[25%] font-semibold px-5 bg-yellow-400 rounded-lg text-black">
        <p className="text-[25px]">{data.taskCount.new}</p> Accepted Task
      </div>
      <div className="py-4 h-[100px] w-[25%] font-semibold px-5 bg-red-400 rounded-lg ">
        <p className="text-[25px]">{data.taskCount.failed}</p> Failed Task
      </div>
    </div>
  );
}

export default TasksNumbers;
