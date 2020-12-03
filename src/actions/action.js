import {ADD_REMINDER, CLEAR_REMINDER} from '../types';
import {REMOVE_REMINDER} from '../types';
export const add =(text , date)=>{
    const action ={
        type : ADD_REMINDER,
        text,
        date
    }
    console.log(action)
    return action
}

export const remove =(id)=>{
    const action ={
        type : REMOVE_REMINDER,
        id
    }
    return action
}

export const clear =()=>{
    const action ={
        type : CLEAR_REMINDER
    }
    return action
}