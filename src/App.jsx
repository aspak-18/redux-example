//! EXAMPLE OF REDUX-SETUP IN SAME FILE

// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import React from "react";
// import Counter from "./Counter";

// //! STEP 2 ---> CREATE SLICES (FEATURES)
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: 18,
//   reducers: {
//     increment: (state,action) => {
//         console.log(state,action)
//         return state+1
//     },
//     decrement: (state,action) => {
//         console.log(state,action)
//         return state-1
//     },
//     reset: (state,action) => {
//         console.log(state,action)
//         return state*0
//     },
//   },
// });

// export let {increment,decrement,reset}=counterSlice.actions

// //! STEP 1 ----> CREATE STORE
// const myStore = configureStore({
//   reducer: counterSlice.reducer,
// });

// const App = () => {
//   return (
//     <div>
//       <h1>Redux--App</h1>
//       {/* STEP 3 ----> PROVIDE ACCESS OF STORE */}
//       <Provider store={myStore}>
//         <Counter />
//       </Provider>
//     </div>
//   );
// };

// export default App;

//! REDUX-SETUP USING PROPER FOLDER STRUCTURE

import React from "react";
import Counter from "./Counter";
import { Provider } from "react-redux";
import { myStore } from "./redux/store";

const App = () => {
  return (
    <div>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default App;
