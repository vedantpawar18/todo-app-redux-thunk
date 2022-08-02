import { applyMiddleware, legacy_createStore } from "redux";
import { reducer } from "./reducer";

const customMiddleware = (store) => next => action =>{
    if (typeof action=== "function")
    {
        return action(store.dispatch)
    }
    else if(typeof action === "object")
    {
        return next(action)
    }
}

const store= legacy_createStore(reducer, applyMiddleware(customMiddleware));

export {store}