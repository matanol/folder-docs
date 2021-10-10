import React from "react";
import logo from "./logo.svg";
import useGetTree from "./useGetTree";
import "./App.css";

function App() {
  const { dirTree, docFiles, isLoading } = useGetTree();

  React.useEffect(() => {
    console.log("dirTree", dirTree);
    console.log("docFiles", docFiles);
  }, [dirTree, docFiles]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <p>{JSON.stringify(docFiles)}</p>
        )}
      </header>
    </div>
  );
}

export default App;
