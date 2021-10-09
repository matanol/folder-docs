import React from "react";
import logo from "./logo.svg";
import useGetTree from "./useGetTree";
import "./App.css";

function App() {
  const { tree, isLoading } = useGetTree();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? <span>Loading...</span> : <p>{JSON.stringify(tree)}</p>}
      </header>
    </div>
  );
}

export default App;
