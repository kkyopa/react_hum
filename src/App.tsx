import React from "react";
import Counter from "./Counter";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  message?: string;
}

const App: React.FC<AppProps> = ({ message }) => {
  return (
    <div>
      <Counter />
    </div>
  );
};

App.defaultProps = {
  message: "設定してない",
};

export default App;
