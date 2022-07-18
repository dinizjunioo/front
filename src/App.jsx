import './App.css'
import React, { useState } from 'react';
import Tasks from './components/Tasks';
import AddTask  from './components/AddTask';


// Precisamos criar um state para alterar uma variavel

//message = 'Hello world!' valor inicial é dentro do useState

// PROPS COMPONENTE PAI PARA COMPONENTE FILHO

const App = () => {
  //const [message, setMessage] = useState("Hello world")
  const [tasks, setTasks] = useState([
    {
      title: "Matematica",
      conteudo: "Materia favorita",
      id: 1,
      completed: true,
    },
  ]);

  const handleTaskAddtion = (taskTitle, taskConteudo) =>
  {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        conteudo: taskConteudo,
        completed: true,
      },
    ];

    setTasks(newTasks);
   
  };

  const deleteTask = (taskId) => 
  {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <>
      <div class="container">     
        <AddTask 
          handleTaskAddtion={handleTaskAddtion} 
        /> 
        <Tasks 
          tasks={tasks} 
          deleteTask={deleteTask} 
        />
      </div>
    </>
    // agora addTask é um filho 
  );
};

export default App;

/*
      <button onClick={(props) =>
      {
        message.id === 1 ?  setMessage("message.title") : setMessage("message.title");
      }}> MUDAR MENSAGEM 
      </button>
*/
//import Quiz from './Quiz'
//import './index.css'

//const App =(message)=>
//{
 // return 
 // <div>
  //  <h1>{message}</h1>
  //</div>

//};
/*export default function App() {
  
  return (
    <>
      <div class="container">
        <h1>{message}</h1>
      </div>
      <button onClick={() => setMessage("helooooo")} > MUDAR MENSAGEM 
      </button>
    </>
  );
};
*/


