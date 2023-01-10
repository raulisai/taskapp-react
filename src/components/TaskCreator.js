import React, { useState } from "react";

export const TaskCreator = (props) => {
  const [newTaskName, setnewTaskName] = useState("");

  const updateNewTaskValue = (e) => setnewTaskName(e.target.value);

  const CreatNewTask = () => {
      props.callback(newTaskName)
    console.log(newTaskName);
    setnewTaskName("");
  };

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={updateNewTaskValue}
      />
      <button
        className="btn btn-primary mt-1 items-center"
        onClick={() => CreatNewTask()}
      >
        Add Task
      </button>
    </div>
  );
};
