import { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [inputValue, setInputValue] = useState('');
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = {
      id: Date.now(), 
      text: inputValue,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInputValue('');
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const startEditing = (task) => {
    setEditId(task.id);
    setEditValue(task.text);
  };

  const handleSaveEdit = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: editValue } : task
      )
    );
    setEditId(null);
    setEditValue('');
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Görev Yöneticisi</h2>

      {/* Ekleme Formu */}
      <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Yeni bir görev ekle..."
          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
          Ekle
        </button>
      </form>

      {/* Görev Listesi */}
      <ul className="space-y-3">
        {tasks.map((task) => (
          <li key={task.id} className={`flex items-center justify-between p-4 border rounded-lg transition-colors ${task.completed ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
            {editId === task.id ? (
              <div className="flex gap-2 flex-1">
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <button onClick={() => handleSaveEdit(task.id)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 font-medium">Kaydet</button>
                <button onClick={() => setEditId(null)} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500 font-medium">İptal</button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-4 flex-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleComplete(task.id)}
                    className="w-5 h-5 text-blue-600 rounded cursor-pointer"
                  />
                  <span className={`flex-1 text-lg ${task.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    {task.text}
                  </span>
                </div>
                <div className="flex gap-3">
                  <button onClick={() => startEditing(task)} className="text-blue-600 hover:text-blue-800 font-semibold">Düzenle</button>
                  <button onClick={() => handleDeleteTask(task.id)} className="text-red-500 hover:text-red-700 font-semibold">Sil</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      {tasks.length === 0 && <p className="text-center text-gray-500 mt-6 italic">Henüz bir görev eklemedin.</p>}
    </div>
  );
};

export default TaskManager;