import {increment,deccrement,reset} from '../constants/CounterConstant';

export const IncrementCounter = () => {
    return{
        type:increment
    }
};

export const DecrementCounter = () => {
    return{
        type:deccrement
    }
};

export const  resetCounter = () => {
    return{
        type:reset
    }
};