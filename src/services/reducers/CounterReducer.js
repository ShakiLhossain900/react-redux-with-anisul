//3. reducer increment -> count = count + 1
//decrement -> count = count-1
//reset -> count -> 0

import {increment,deccrement,reset} from '../constants/CounterConstant';

const initialCounter = { count: 0 };
const CounterReducer = (state = initialCounter, action) => {

    switch (action.type) {
        case increment:
            return{
              ...state, 
              count: state.count+1
            }
        case deccrement:
            return{ 
            ...state, 
            count: state.count-1
            }
        case reset: 
        return{
            ...state, 
             count:0
        }
        default:
            return state
    }
};

export default CounterReducer;