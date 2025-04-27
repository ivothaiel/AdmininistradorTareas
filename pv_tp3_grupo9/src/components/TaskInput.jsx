import React, { useState } from 'react';
import Boton from './Boton';

const TaskInput = ({ onAdd }) => {
  const [texto, setTexto] = useState('');

  const manejarSubmit = () => {
    if (texto.trim() !== '') {
      onAdd(texto);
      setTexto('');
    }
  };

  return (
    <div className="task-input">
      <label htmlFor="nueva-tarea">Ingrese una tarea:</label>
      <input
        id="nueva-tarea"
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Nueva tarea..."
      />
      <Boton texto="Agregar" onClick={manejarSubmit} />
    </div>
  );
};

export default TaskInput;
