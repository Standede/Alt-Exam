import React from "react";
import { Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import Counter from "./components/Counter";
import FallBack from "./components/FallBack";
import NoMatch from "./components/404";
import { ErrorTrigger } from "./components/ErrorTrigger";
import "./App.css";
import ReactCounter from "./components/Reducer";

function App() {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallBack}>
        <Routes>
          <Route exact path="/" element={<Counter />} />
          <Route path="/error" element={<ErrorTrigger />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/reducer" element={<ReactCounter />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
