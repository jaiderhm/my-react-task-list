import { useState } from "react";

function Task({ title, completed }) {


  const [taksReady, setTasks] = useState([]);




  const [editingTask, setEditingTask] = useState(null);

  return (
    <div>
      <span>{title}</span>
      <input type="checkbox" name={title} completed={completed = null} />
    </div>
  );
};

export default Task;
