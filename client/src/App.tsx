import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [tree, setTree] = React.useState("No work");

  React.useEffect(() => {
    console.log("react");

    window.addEventListener(
      "build",
      function (e) {
        // @ts-ignore
        console.log("dispatched REACT!!", e);
        // @ts-ignore
        setTree(e.target.MY_TEST);
      },
      false
    );

    return () => {
      // @ts-ignore
      window.removeEventListener("build");
    };
  }, []);

  // React.useEffect(() => {
  //   // @ts-ignore
  //   console.log("react");
  //   console.log({ ...globalThis });
  //   // @ts-ignore
  //   const newTree = globalThis.MY_TEST;

  //   if (newTree) {
  //     setTimeout(() => {
  //       setTree(newTree);
  //     }, 500);
  //   }
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(tree)}</p>
      </header>
    </div>
  );
}

export default App;
