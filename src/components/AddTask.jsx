
import React, { useState } from 'react';
import './AddTask.css'
import Button from "./Button";

import './Button.css'
const AddTask = ({handleTaskAddtion}) =>
{
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) =>  {
        setInputData(e.target.value);

    }

    const [inputData2, setInputData2] = useState("");

    const handleInputChange2 = (e) =>  {
        setInputData2(e.target.value);

    }

    const handleAddTaskClick = () => {
        if(inputData !== "" && inputData2 !== "")
        {
            handleTaskAddtion(inputData,inputData2);
            setInputData("");
        }else{
            if(inputData === "")
                alert("Input Título vazio. digite um título!")
            else{
                alert("Input Conteúdo vazio. digite o conteúdo a ser postado!")  
            }
        }    
        
    }

    return(
        <div class="task-container">
            <div > 
            <form action="">
                <h1>Título</h1>
                <input 
                    onChange={handleInputChange}
                    value={inputData}
                    type="text" 
                    class="task-input"
                /> 
                 <h1>Conteúdo</h1>
                <input 
                    onChange={handleInputChange2}
                    value={inputData2}
                    type="text" 
                    class="task-input"
                />
            </form>                   
            </div>
            <div  class="add-task-button">
                <Button
                    onClick={handleAddTaskClick}>
                    Salvar
                </Button>                                 
            </div>
        </div>
    );
};

export default AddTask;