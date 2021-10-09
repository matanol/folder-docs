import * as React from "react";

const useGetTree = () => {
  const [tree, setTree] = React.useState(null);

  React.useEffect(() => {
    // @ts-ignore
    setTree(window.MY_TEST);
  }, []);

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

  return { tree, isLoading: !Boolean(tree) };
};

export default useGetTree;
