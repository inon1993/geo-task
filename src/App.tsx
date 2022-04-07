import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import Layout from "./components/Layout/Layout";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Logo className="App-logo"/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
          Best of luck on your task!
        </p>
      </header> */}
      <Layout />
    </div>
  );
}

export default App;
