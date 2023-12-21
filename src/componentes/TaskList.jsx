import React, { useEffect, useState } from "react";
import Task from "./Task";

function TaskList() {

  //Listado de tareas
  const tasks = [
    { id: 1, title: 'sacar al perro', description : "pasear al perro", completed: false },
    { id: 2, title: 'estudiar para el examen', description : "examen de matematicas", completed: false },
    { id: 3, title: 'ir de compras', description : "comprar estreno", completed: false },
  ];



  //Efecto para cargar tareas desde localStorage al inicio
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);




  //Función para agregar una nueva tarea
  const addTask = (title, description) => {
    const newTask = {
      id: new Date().getTime(),
      title,
      description,
      completed: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    updateLocalStorage(newTasks);
  };



  //Función para eliminar una tarea
  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    updateLocalStorage(newTasks);
  };

  
  
  //Función para editar una tarea
  const editTask = (taskId, title, description) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, title, description }
        : task
    );

    setTasks(updatedTasks);
    setEditingTask(null);
    updateLocalStorage(updatedTasks);
  };

  
  
  //Función para marcar una tarea como completada
  const completeTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  
  
  //Función para actualizar localStorage
  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  
  return (
    <div>
      <h2>Task List</h2>
      <div className="task-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            completed={() => completeTask(task.completed)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList
