import React, { useState, useEffect } from 'react';
import '../styles/todo.css';

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleEditTask = (index) => {
    setNewTask(tasks[index].text);
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = tasks.map((task, i) => 
        i === editingIndex ? { ...task, text: newTask } : task
      );
      setTasks(updatedTasks);
      setNewTask("");
      setEditingIndex(null);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (editingIndex !== null) {
        handleSaveEdit(); 
      } else {
        handleAddTask();
      }
    }
  };

  return (
    <div className="todo-container">
      <header className="todo-header">
        <h1>To-Do List</h1>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          onKeyPress={handleKeyPress} 
          placeholder={editingIndex !== null ? "Edit your task" : "Add a new task"} 
        />
        {editingIndex !== null ? (
          <button className="save-btn" onClick={handleSaveEdit}>Save Edit</button>
        ) : (
          <button className="add-btn" onClick={handleAddTask}>Add Task</button>
        )}
      </header>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span 
              onClick={() => handleToggleComplete(index)} 
              className="task-text"
            >
              {task.text}
            </span>
            <div className="task-actions">
              <button className="edit-btn" onClick={() => handleEditTask(index)}>Edit</button>
              <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;