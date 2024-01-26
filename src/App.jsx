import Header from './componentes/header';
import TaskList from './componentes/TaskList';
import Task from './componentes/Task';





function App() {
  return (<>
    <div className='contenedor'>
      <Header className='Header' />
      <TaskList className='TaskList' tasks={Task} />
    </div>
  </>
  );
}

export default App;
