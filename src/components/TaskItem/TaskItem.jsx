const TaskItem = ({ task, tasks, setTasks, setEditingTask }) => {
    const handleDelete = () => {
      const updatedTasks = tasks.filter((t) => t.id !== task.id);
      setTasks(updatedTasks);
    };
  
    const handleToggleComplete = () => {
      const updatedTasks = tasks.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      );
      setTasks(updatedTasks);
    };
  
    const handleEdit = () => {
      setEditingTask(task);
    };
  //EN ESTA CARPETA ENCONTRAMOS LA CREACION Y EDICION DE LOS ITEMS EJEMPLO, LA TAREA QEU SE CARGA DESPUES DE PRECIONAR AGREGAR TARE
    return (
      <li className="flex items-center justify-between p-4 border rounded-lg shadow-md">
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={handleToggleComplete}
            className="mr-4"
          />
          <span className={`text-lg ${task.completed ? 'line-through text-gray-400' : ''}`}>
            {task.title}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleEdit}
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Editar
          </button>
          <button
            onClick={handleDelete}
            className="text-red-500 hover:text-red-700 transition"
          >
            Eliminar
          </button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  