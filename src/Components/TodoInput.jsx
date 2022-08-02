import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTaskFailure, addTaskRequest,getTasks, addTaskSuccess } from '../Redux/action';


const TodoInput = () => {
    const [currentTask, setCurrentTask] = useState("");
    const dispatch= useDispatch();

    const addTask = () =>{
        if(currentTask){
            const payload= {
                title: currentTask,
                status:false
            }
            dispatch(addTaskRequest())
            axios.post("http://localhost:8080/tasks",payload)
            .then(r=>{
                dispatch(addTaskSuccess())
                setCurrentTask("")
            })
            .then (() => dispatch(getTasks))
            .catch(e=>{
                dispatch(addTaskFailure())
            });
        }
    }
  return (
    <div>
        <input value={currentTask} onChange={(e) => setCurrentTask(e.target.value)} placeholder="add task"/>
        <button onClick={addTask}>Add task</button>
    </div>
  )
}

export default TodoInput