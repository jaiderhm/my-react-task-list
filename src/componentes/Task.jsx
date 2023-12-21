function Task({ title, completed }){


  const [taksReady, setTasks] = useState([]);



  
  const [editingTask, setEditingTask] = useState(null);
  
  return (
    <div>
      <span>{title}</span>
      <input type="checkbox" name={title} completed={completed} />
    </div>
  );
};

export default Task;
