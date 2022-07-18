import React from "react";
import './Task.css'
const Task = ({task, deleteTask}) =>{
    return ( 
        <div>
        <div class="task-container"
        
             style= {task.completed ? {borderBottom: "6px solid chartreuse"}
             : {}
                    }
        >
                {task.title}
       
        <div    className="buttons-container">
            <button 
                className="remove-task" 
                onClick={ () => deleteTask(task.id)}>
                X
            </button>
        </div> 

        </div>
        
        <div class="task-container">
            Conteúdo: {task.conteudo}
        </div>

        </div>
    );
}

export default Task;