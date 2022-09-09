import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  IncrementCounter,
  DecrementCounter,
  resetCounter,
} from "../services/actions/CounterAction";

const Counter = () => {
  //const count = useSelector((state) => state.count);
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incremnetHandller = () => {
    dispatch(IncrementCounter());
  };

  const decrementHandller = () => {
    dispatch(DecrementCounter());
  };
  const resetHandller = () => {
    dispatch(resetCounter());
  };

  return (
    <div>
      <h1>Counter App</h1>
      <h3>count : {count}</h3>
      <button type="btn" onClick={incremnetHandller}>
        Increment
      </button>
      <button type="btn" onClick={decrementHandller}>
        Deccrement
      </button>
      <button type="btn" onClick={resetHandller}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

//1. state count:0
//2. actions increment decrement reset
//3. reducer increment -> count = count + 1
//decrement -> count = count-1
//reset -> count -> 0
//store
// 5. providing store in react
//6. use store
