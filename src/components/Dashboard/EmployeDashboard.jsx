import React from "react";
import Header from "../others/Header";
import TasksNumbers from "../others/TasksNumbers";
import TaskList from "../TaskList/TaskList";

function EmployeDashboard(props) {
  return (
    <div className="bg-[#111] p-8">
      <Header changeUser={props.changeUser} data={props.data} />
      <TasksNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
}

export default EmployeDashboard;
