//! EXAMPLE OF REDUX-SETUP IN SAME FILE
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, reset } from "./App";

// const Counter = () => {
//   //! useSelector hook to access initialState
//   let stateVal = useSelector((state) => state);

//   //! useDispatch hook to execute slice action
//   let dispatch = useDispatch();

//   return (
//     <div>
//       <h2>Counter : {stateVal}</h2>
//       <button onClick={() => dispatch(increment("Incremented"))}>
//         Increment
//       </button>
//       <button onClick={() => dispatch(decrement("Decremented"))}>
//         Decrement
//       </button>
//       <button onClick={() => dispatch(reset("Reseted"))}>reset</button>
//       <p>{JSON.stringify(stateVal)}</p>
//     </div>
//   );
// };

// export default Counter;

//! REDUX-SETUP USING PROPER FOLDER STRUCTURE

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "./redux/counterSlice";

const Counter = () => {
  let stateVal = useSelector((state) => state);
  let dispatch = useDispatch();
  return (
    <div>
      <h1>Counter:{stateVal}</h1>
      <button onClick={dispatch(increment())}>Increment</button>
      <button onClick={dispatch(decrement())}>Decrement</button>
      <button onClick={dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
