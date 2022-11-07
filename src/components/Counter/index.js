import style from "./counter.module.css";
import { AddIcon, MinusIcon, ResetIcon } from "../../assets/svg";
import useCounter from "../../hooks/useCounter";
import randomIntFromInterval from "../../utils/randomIntFromInterval";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

function Counter() {
  const intiatlState = {
    numLenght: 0,
    startIncrement: false,
    startDecrement: false,
    timeOutId: 0,
    intervalId: 0
  };
  const [count, increment, decrement, reset, setValue, setCount] = useCounter();
  const [state, setState] = useState(intiatlState);

  const handleStateChange = (change) => {
    setState({ ...state, ...change });
  };

  useEffect(() => {
    handleStateChange({ numLenght: String(count).length });
    // eslint-disable-next-line
  }, [count]);

  const getStyle = (count) => {
    const negativeColors = ["#ff8008", "#ffc837", "#eb3349", "#f45c43"];
    const positiveColors = ["#71b280", "#1d976c", "#4cb8c4", "#3cd3ad"];
    const neutralColours = [
      "#2bc0e4",
      "#4389a2",
      "#085078",
      "#4776e6",
      "#8e54e9"
    ];
    if (count === 0)
      return {
        backgroundColor:
          neutralColours[randomIntFromInterval(0, neutralColours.length - 1)]
      };
    if (count < 0)
      return {
        backgroundColor:
          negativeColors[randomIntFromInterval(0, negativeColors.length - 1)]
      };
    if (count > 0)
      return {
        backgroundColor:
          positiveColors[randomIntFromInterval(0, positiveColors.length - 1)]
      };
  };

  const getFontSize = (numLength) => {
    const base = 16;
    const divisor = 2;
    const size = (base * divisor) / (numLength < 2 ? divisor : numLength);
    return size;
  };

  const handleMouseDown = (type) => {
    switch (type) {
      case "increment":
        handleStateChange({
          timeOutId: setTimeout(() => {
            raceIncrement();
          }, 1000)
        });
        break;
      case "decrement":
        handleStateChange({
          timeOutId: setTimeout(() => {
            raceDecrement();
          }, 1000)
        });
        break;
      default:
        break;
    }
  };

  const handleMouseUp = () => {
    let tId = state.timeOutId;
    let iId = state.intervalId;
    clearTimeout(tId);
    clearInterval(iId);
    while (tId--) {
      clearTimeout(tId);
    }
    while (iId--) {
      clearInterval(tId);
    }
  };

  const raceIncrement = () => {
    const id = setInterval(() => {
      increment();
    }, 100);
    handleStateChange({ intervalId: id });
  };

  const raceDecrement = () => {
    const id = setInterval(() => {
      decrement();
    }, 100);
    handleStateChange({ intervalId: id });
  };

  return (
    <main className={style.Counter} style={getStyle(count)}>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="Custom Counter Page"
          content="View my counter app done with useReducer and Custom Hook"
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <section className={style.Counter_container}>
        <button
          onClick={decrement}
          onMouseDown={() => handleMouseDown("decrement")}
          onTouchStart={() => handleMouseDown("decrement")}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
        >
          <MinusIcon />
        </button>
        <div
          onBlur={setValue}
          onInput={(e) =>
            handleStateChange({ numLenght: e.currentTarget.textContent.length })
          }
          contentEditable={true}
          className={style.Counter_display}
          suppressContentEditableWarning={true}
          style={{ fontSize: `${getFontSize(state.numLenght)}rem` }}
        >
          {count}
        </div>
        <button
          onClick={increment}
          onMouseDown={() => handleMouseDown("increment")}
          onTouchStart={() => handleMouseDown("increment")}
          onMouseUp={handleMouseUp}
          onTouchEnd={handleMouseUp}
        >
          <AddIcon />
        </button>
      </section>
      <button onClick={reset} className={style.Counter_reset}>
        <ResetIcon />
      </button>
      <Link to={`/reducer`}>useReducer</Link>
    </main>
  );
}

export default Counter;
