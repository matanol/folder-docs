import React from "react";
import docs from "./data/docs.json";
import tree from "./data/tree.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>{JSON.stringify(docs, null, 2)}</div>

        <div>{JSON.stringify(tree, null, 2)}</div>
      </header>
    </div>
  );
}

export default App;
