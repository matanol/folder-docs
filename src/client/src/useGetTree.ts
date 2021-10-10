import * as React from "react";

const useGetTree = () => {
  const [dirTree, setDirTree] = React.useState(null);
  const [docFiles, setDocFiles] = React.useState(null);

  React.useEffect(() => {
    // @ts-ignore
    setDirTree(window.dirTree);
    // @ts-ignore
    setDocFiles(window.docFiles);
  }, []);

  React.useEffect(() => {
    console.log("react");

    window.addEventListener(
      "inject",
      function (e) {
        console.log("dispatched REACT!!", e);
        // @ts-ignore
        setDirTree(e.target.dirTree);
        // @ts-ignore
        setDocFiles(e.target.docFiles);
      },
      false
    );

    return () => {
      // @ts-ignore
      window.removeEventListener("build");
    };
  }, []);

  return { dirTree, docFiles, isLoading: !(dirTree && docFiles) };
};

export default useGetTree;
