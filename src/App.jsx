import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';
import TaskStats from './components/TaskStats/TaskStats';



const App = () => {
  // Estado de las tareas, lo inicializamos con tareas desde localStorage si es posible
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Estado para manejar el filtro de tareas
  const [filter, setFilter] = useState('all'); // Valores posibles: 'all', 'active', 'completed'

  // Estado para la tarea que estamos editando
  const [editingTask, setEditingTask] = useState(null);

  // Función para guardar las tareas en localStorage cada vez que se actualicen
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Filtrar tareas según el estado del filtro
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all'
  });
//darle estilo a la pagina
  return (
    <div
      className="min-h-screen p-6"
      style={{
        backgroundImage: `url('./public/fondo.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        {/* Título de la aplicación */}
        <h1 className="text-3xl font-semibold text-center mb-6">
          GESTION DE TAREAS
        </h1>

        {/* Formulario para agregar/editar tareas */}
        <TaskForm
          tasks={tasks}
          setTasks={setTasks}
          editingTask={editingTask}
          setEditingTask={setEditingTask}
        />

        {/* Componente para mostrar las estadísticas de las tareas */}
        <TaskStats tasks={tasks} />

        {/* Filtro de tareas */}
        <TaskFilter filter={filter} setFilter={setFilter} />

        {/* Lista de tareas */}
        <TaskList
          tasks={filteredTasks}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      </div>
    </div>
  );
};

export default App;
