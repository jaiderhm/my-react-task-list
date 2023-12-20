import Task from "./Task";
import { useEffect, useState } from "react";

function TaskList ({ tasks }) {

  return (
    <div>
      <h2>Task List</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} name={task.name} completed={task.completed} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
