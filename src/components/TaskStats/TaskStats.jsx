const TaskStats = ({ tasks }) => {
    const pendingTasks = tasks.filter((task) => !task.completed).length;
  
    return (
      <div className="mb-4 text-center">
        <p className="text-xl font-semibold">
          Tareas Pendientes: {pendingTasks} / Total: {tasks.length}
        </p>
      </div>
    );
  };
  
  export default TaskStats;
  