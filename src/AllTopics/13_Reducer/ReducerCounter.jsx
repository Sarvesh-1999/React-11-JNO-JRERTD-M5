import { useReducer } from "react";

const initialState = { count: 0 };
const reducerFunc = (prev, action) => {
  switch (action) {
    case "incre":
      return { count: prev.count + 1 };
  }
};

const ReducerCounter = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  console.log(state);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Learn useReducer Hook</h1>
      <p className="text-center mt-4 font-semibold">Counter : {state.count}</p>
      <button
        className="m-4 px-5 bg-green-500"
        onClick={() => dispatch("incre")}
      >
        incre
      </button>
    </div>
  );
};

export default ReducerCounter;
