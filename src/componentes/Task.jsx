function Task({ name, completed }){
  return (
    <div className={`task ${completed ? 'completed' : ''}`}>
      <span>{name}</span>
      <input type="checkbox" checked={completed} readOnly />
    </div>
  );
};

export default Task;
