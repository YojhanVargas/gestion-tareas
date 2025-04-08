import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, setTasks, filter, setEditingTask }) => {
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  return (
    <ul className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setEditingTask={setEditingTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
