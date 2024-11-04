import React from "react";
import AcceptTask from "./NewTask";
import NewTask from "./AccpetTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

function TaskList({ data }) {
  return (
    <div
      id="taskList"
      className=" overflow-x-auto mt-10 gap-5 flex h-[300px] items-center"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem} />;
        }
        if (elem.new) {
          return <NewTask key={idx} data={elem} />;
        }
        if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        }
        if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
}

export default TaskList;
