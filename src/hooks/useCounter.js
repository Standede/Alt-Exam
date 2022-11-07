import { useReducer } from "react";

const initialCount = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return (state += 1);
    case "decrement":
      return (state -= 1);
    case "setValue":
      return (state = action.value);
    case "setCount":
      return (state = action.value);
    default:
      throw new Error();
  }
}

export default function useCounter() {
  const [state, dispatch] = useReducer(reducer, initialCount);

  const reset = () => {
    dispatch({ type: "setValue", value: 0 });
  };
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };
  const setValue = (e) => {
    dispatch({ type: "setValue", value: Number(e.currentTarget.textContent) });
  };
  const setCount = (e) => {
    dispatch({ type: "setCount", value: Number(e.target.value) });
  };

  return [state, increment, decrement, reset, setValue, setCount];
}
