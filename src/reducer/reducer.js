import {ADD_REMINDER, REMOVE_REMINDER , CLEAR_REMINDER} from '../types';
import { bake_cookie, read_cookie } from 'sfcookies'
const reminders = (state=[] , action) =>{
    let reminder ;
    state = read_cookie('x')
    if(action.type === ADD_REMINDER){
        reminder = [...state , {text : action.text , date:action.date , id:Math.random()}]
        bake_cookie('x' , reminder);
        return reminder
    }else if(action.type === REMOVE_REMINDER){
        const reminders = state.filter(remm=>remm.id !== action.id)
        bake_cookie('x' , reminders);
        return reminders;
    }else if(action.type === CLEAR_REMINDER){
        const reminders = [];
        bake_cookie('x' , reminders);
         return reminders
    }
    else{
        return state
    }
}

export default reminders;