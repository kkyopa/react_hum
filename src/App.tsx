import React from "react";
import CounterReducer from "./CounterReducer";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterReducer />
    </div>
  );
};

App.defaultProps = {
  message: "設定してない",
};

export default App;
