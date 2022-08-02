import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTasksFailure, getTasksRequest, getTasksSuccess,getTasks } from '../Redux/action'
import TodoInput from './TodoInput'

const Todos = () => {
    const dispatch= useDispatch();
    const tasksData= useSelector(store=> store.tasks);

   

    useEffect (() =>{
        getTasks(dispatch);
    },[]);

    
  return (
    <div>
        <h4>Todos</h4>
        <TodoInput  />
        {
           tasksData.length>0 && tasksData.map((task)=>{
                return <div  key={task.id}>{task.title}</div>
            })
        }
    </div>
  )
}

export default Todos