import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tareas, onToggle, onDelete }) => {
  return (
    <div className="task-list">
      {tareas.length === 0 ? (
        <p className="no-tareas">No hay tareas aún.</p>
      ) : (
        <ul>
          {tareas.map((tarea) => (
            <li key={tarea.id}>
              <TaskItem tarea={tarea} onToggle={onToggle} onDelete={onDelete} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
