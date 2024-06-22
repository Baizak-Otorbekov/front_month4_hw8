import React, { useState } from 'react';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const handleAddTask = (title) => {
    const newTask = { id: tasks.length + 1, title };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleEditTask = (id, title) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title } : task));
    setEditingTaskId(null);
  };

  const handleStartEdit = (id) => {
    setEditingTaskId(id);
  };

  const handleCancelEdit = () => {
    setEditingTaskId(null);
  };

  return (
    <div className="task-pane">
      <h1>Список задач</h1>
      <AddTask onAdd={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEdit={handleStartEdit}
        editingTaskId={editingTaskId}
        onCancelEdit={handleCancelEdit}
        onConfirmEdit={handleEditTask}
      />
    </div>
  );
};

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Введите задачу..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddTask}>Добавить задачу</button>
    </div>
  );
};

const EditTask = ({ task, onConfirmEdit, onCancelEdit }) => {
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSaveEdit = () => {
    onConfirmEdit(task.id, editedTitle);
  };

  const handleCancelEdit = () => {
    onCancelEdit();
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <button onClick={handleSaveEdit}>Сохранить</button>
      <button onClick={handleCancelEdit}>Отменить</button>
    </div>
  );
};

const TaskList = ({ tasks, onDelete, onEdit, editingTaskId, onCancelEdit, onConfirmEdit }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <div key={task.id} className="task">
          {editingTaskId === task.id ? (
            <EditTask
              task={task}
              onConfirmEdit={onConfirmEdit}
              onCancelEdit={onCancelEdit}
            />
          ) : (
            <>
              <span>{task.title}</span>
              <button onClick={() => onDelete(task.id)}>Удалить</button>
              <button onClick={() => onEdit(task.id)}>Редактировать</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Task;
