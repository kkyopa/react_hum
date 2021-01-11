import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface AppProps {
  message?: string;
  name: string;
}

const App: React.FC<AppProps> = ({ message, name }) => {
  return (
    <div>
      {message}
      {name}
    </div>
  );
};

App.defaultProps = {
  message: "設定してない",
};

export default App;
