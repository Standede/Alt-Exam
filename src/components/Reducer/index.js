import React, { useReducer } from "react";
import style from "./reducer.module.css";
import { AddIcon, MinusIcon, ResetIcon } from "../../assets/svg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const initialState = { count: 0, value: Number("") };
const reducerCounter = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count !== 0 ? state.count - 1 : (state.count = 0) };
    case "setValue":
      return { count: action.payload };
    case "reset":
      return initialState;

    default:
      throw new Error("Error occured in counter");
  }
};

export default function ReactCounter() {
  const [state, dispatch] = useReducer(reducerCounter, initialState);
  const changeCounterValue = (value) => {
    dispatch({ type: "setValue", payload: Number(value) });
  };

  return (
    <div className={style.Counter}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="useReducer Page "
          content="View my counter app done with useReducer and Custom Hook"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <div className={style.Counter_header}>
          <h2>Count:</h2>
          <h1 className={style.Counter_display}>{state.count}</h1>
        </div>
        <div className={style.Counter_buttons}>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "decrement" });
            }}
          >
            <MinusIcon />
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch({ type: "increment" });
            }}
          >
            <AddIcon />
          </button>
          <button
            type="button"
            className={style.Counter_reset}
            onClick={() => {
              dispatch({ type: "reset" });
            }}
          >
            <ResetIcon />
          </button>
        </div>
        <input
          placeholder="Set Value"
          type="number"
          onChange={(e) => {
            changeCounterValue(e.target.value);
          }}
        />
        <Link to={`/`}>Landing</Link>
      </div>
    </div>
  );
}
