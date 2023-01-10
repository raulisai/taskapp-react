import React from "react";

export const TaskBaner = (props) => (
  <h4 className="bg-primary text-white text-center p-4">
 User: {props.userName} - Task app (you have {props.taskItems.filter(t => !t.done).length} task)
  </h4>
);
