import React from "react";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";
import Header2 from "../others/Header2";
import { setLocalStorage } from "../../utils/LocalStorage";

function AdminDashboard(props) {
  setLocalStorage();
  return (
    <div className="w-full h-full p-5 pb-0">
      <Header2 />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default AdminDashboard;
