import * as types from "./actionTypes";
import axios from "axios"

const getTasksRequest = () =>{
    return {
        type: types.GET_TASKS_REQUEST
    }
}
const getTasksSuccess = (payload) =>{
    return {
        type: types.GET_TASKS_SUCCESS, payload
    }
}
const getTasksFailure = (errorMessage) =>{
    return {
        type: types.GET_TASKS_FAILURE,
        payload:errorMessage
    }
}
const addTaskRequest = () =>{
    return {
        type: types.ADD_TASK_REQUEST
    }
}
const addTaskSuccess = (payload) =>{
    return {
        type: types.ADD_TASK_SUCCESS, payload
    }
}
const addTaskFailure = (errorMessage) =>{
    return {
        type: types.ADD_TASK_FAILURE,
        payload:errorMessage
    }
}

const getTasks = (dispatch) =>{
    dispatch(getTasksRequest())
    axios.get("http://localhost:8080/tasks")
    .then(r=>{
        dispatch(getTasksSuccess(r.data))
    })
    .catch((e) =>{
        dispatch(getTasksFailure(e))
    })
};

export {getTasksFailure, getTasksRequest, getTasksSuccess, addTaskFailure,addTaskRequest,
addTaskSuccess, getTasks}