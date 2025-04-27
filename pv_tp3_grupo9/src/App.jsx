import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tareas, setTareas] = useState([]);

  const addTarea = (texto) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const onToggle = (id) => {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    ));
  };

  const onDelete = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="app">
      <Header />
      <TaskInput onAdd={addTarea} />
      <TaskList tareas={tareas} onToggle={onToggle} onDelete={onDelete} />
      <Footer />
    </div>
  );
};

export default App;
