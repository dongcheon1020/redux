import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Box from "./component/Box";

function App() {
  const counter = useSelector((state) => state.counter);
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "noona", password: 123 } });
  };
  const down = () => {
    dispatch({ type: "DOWN", payload: { down: 5 } });
  };
  return (
    <div>
      <h1>
        {id}
        {password}
      </h1>
      <h1>{counter}</h1>
      <button onClick={increase}>클릭</button>
      <button onClick={login}>login</button>
      <button onClick={down}>다운</button>
      <Box />
    </div>
  );
}

export default App;
