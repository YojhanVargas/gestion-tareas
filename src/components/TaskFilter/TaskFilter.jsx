const TaskFilter = ({ filter, setFilter }) => {
    return (
      <div className="mb-4 flex justify-center space-x-4">
        <button
          onClick={() => setFilter('all')}
          className={`${
            filter === 'all' ? 'font-bold text-blue-600' : 'text-gray-600'
          } hover:text-blue-500 transition`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`${
            filter === 'active' ? 'font-bold text-blue-600' : 'text-gray-600'
          } hover:text-blue-500 transition`}
        >
          Activas
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`${
            filter === 'completed' ? 'font-bold text-blue-600' : 'text-gray-600'
          } hover:text-blue-500 transition`}
        >
          Completadas
        </button>
      </div>
    );
  };
  
  export default TaskFilter;
  