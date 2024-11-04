import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

function CreateTask(props) {
  const [userData, setUserData] = useContext(AuthContext);

  const [title, getTaskTitle] = useState("");
  const [date, getTaskDate] = useState("");
  const [asingTo, geTasingTo] = useState("");
  const [category, getTaskCategory] = useState("");
  const [description, getDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      title,
      description,
      date,
      category,
      active: true,
      newTask: false,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (elem) {
      if (asingTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.active = elem.taskCount.active + 1;
      }
    });
    setUserData(data);

    console.log(data);

    getTaskTitle("");
    getTaskDate("");
    geTasingTo("");
    getTaskCategory("");
    getDescription("");
  };

  return (
    <form
      onSubmit={(e) => {
        submitHandler(e);
      }}
      className="w-full p-5 flex justify-between bg-[#1f1f1f]"
    >
      <div className="flex flex-col justify-center">
        <div>
          <h3>Task Title</h3>
          <input
            value={title}
            onChange={(e) => {
              getTaskTitle(e.target.value);
            }}
            className="w-[500px] mb-5 px-1 py-1 bg-transparent border-[2px] border-[#919191] rounded outline-none"
            type="text"
            placeholder="Make a UI desing"
          />
        </div>

        <div>
          <h3>Date</h3>
          <input
            value={date}
            onChange={(e) => {
              getTaskDate(e.target.value);
            }}
            className="w-[500px] mb-5 px-1 py-1 bg-transparent border-[2px] border-[#919191] rounded outline-none"
            type="date"
          />
        </div>

        <div>
          <h3>Asing to</h3>
          <input
            value={asingTo}
            onChange={(e) => {
              geTasingTo(e.target.value);
            }}
            className="w-[500px] mb-5 px-1 py-1 bg-transparent border-[2px] border-[#919191] rounded outline-none"
            type="text"
            placeholder="employee name"
          />
        </div>

        <div>
          <h3>Category</h3>
          <input
            value={category}
            onChange={(e) => {
              getTaskCategory(e.target.value);
            }}
            className="w-[500px] mb-5 px-1 py-1 bg-transparent border-[2px] border-[#919191] rounded outline-none"
            type="text"
            placeholder="Desing\ Dev, etc"
          />
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <h3>Description</h3>
        <textarea
          value={description}
          onChange={(e) => {
            getDescription(e.target.value);
          }}
          className="h-[210px] bg-transparent border-[2px] border-[#919191] w-[500px] text-white outline-none p-3 rounded"
        ></textarea>
        <button className="w-[100%] py-3 rounded bg-emerald-600 mt-5">
          Create Task
        </button>
      </div>
    </form>
  );
}

export default CreateTask;
