import React from 'react';
import Boton from './Boton';

const TaskItem = ({ tarea, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => onToggle(tarea.id)}
      />
      <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
        {tarea.texto}
      </span>
      <Boton texto="Eliminar" onClick={() => onDelete(tarea.id)} />
    </div>
  );
};

export default TaskItem;
