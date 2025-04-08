import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


const TaskForm = ({ tasks, setTasks, editingTask, setEditingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Si estamos editando una tarea, precargamos los datos en los campos del formulario
  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    if (editingTask) {
      // Editamos tarea existente
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, title, description }
          : task
      );
      setTasks(updatedTasks);
    } else {
      // Creamos nueva tarea
      const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        createdAt: new Date(),
      };
      setTasks([newTask, ...tasks]);
    }

    // Limpiar el formulario
    setTitle('');
    setDescription('');
    setEditingTask(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto mb-6">
      <h2 className="text-xl font-semibold mb-4 text-center">Agregar/Editar Tarea</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
      >
        {editingTask ? 'Editar Tarea' : 'Agregar Tarea'}
      </button>
    </form>
  );
};

export default TaskForm;
