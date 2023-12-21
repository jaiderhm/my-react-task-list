import './App.css'
import Header from './componentes/header';
import TaskList from './componentes/TaskList';
import Task from './componentes/Task';





function App() {
  return (<>
    <div className='contenedor'>
      <Header />
      <TaskList tasks={Task} />
    </div>
  </>
  );
}

export default App;
