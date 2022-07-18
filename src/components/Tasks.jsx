import React from "react";
import Task from "./Task";

const Tasks = ({ tasks , deleteTask}) => {
    //console.log(tasks);
    return (
        <>
            <h1>
                {tasks.map((task) =>
                (
                    <Task 
                        task={task}
                        deleteTask={deleteTask}
                    />
                ))}
            </h1>
            <h1>
               
            </h1>
        </>
    );
};

export default Tasks;