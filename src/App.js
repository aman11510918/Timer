import React from "react";
import { useReducer } from "react";
import "./App.css";
import { MinuteContext } from "./components/Store/Context";
import { initialState, reducer } from "./components/Store/Reducer";
import Timer from "./components/Timer/Timer.index";

function App() {
  const [data, dispatch] = useReducer(reducer, initialState);
  return (
    <MinuteContext.Provider value={{ minute: data.minute, dispatch: dispatch }}>
      <div className="App">
        <h1>1 minute countdown watch</h1>
        <Timer />
      </div>
    </MinuteContext.Provider>
  );
}

export default App;
