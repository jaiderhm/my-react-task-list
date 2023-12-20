import './App.css'
import Header from './componentes/header';
import TaskList from './componentes/taskList';
import Task from './componentes/Task';
import { useEffect, useState } from 'react';


const tasks = [
  { id: 1, name: 'sacar al perro', completed: false },
  { id: 2, name: 'estudiar para el examen', completed: false },
  { id: 3, name: 'ir de compras', completed: false },
];



function App() {
  return (<>
    <div className='contenedor'>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  </>
  );
}

export default App;
