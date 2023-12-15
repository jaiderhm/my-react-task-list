import './App.css'
import Header from './componentes/header';
import TaskList from './componentes/taskList';
import Task from './componentes/Task';


const tasks = [
  { id: 1, name: 'Task 1', completed: false },
  { id: 2, name: 'Task 2', completed: true },
  { id: 3, name: 'Task 3', completed: false },
];

function App() {
  return (<>
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  </>
  );
}

export default App;

