import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

function AllTask() {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div id="allTask" className="w-full bg-[#1f1f1f] p-5 mt-5">
      <div className="flex items-center p-5 rounded mb-3 h-[60px] bg-blue-400">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-[2px] border-emerald-600 flex items-center p-5 rounded mb-3 h-[40px]"
            >
              <h2 className="w-1/5">{elem.firstName}</h2>
              <h3 className="w-1/5">{elem.taskCount.new}</h3>
              <h5 className="w-1/5">{elem.taskCount.active}</h5>
              <h5 className="w-1/5">{elem.taskCount.completed}</h5>
              <h5 className="w-1/5">{elem.taskCount.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllTask;
