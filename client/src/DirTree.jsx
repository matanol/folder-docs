import React from "react";

const dirTree = __DIR_TREE__;
const docsFiles = __DOCS_FILES__;

const HelloWorld = () => {
  return (
    <>
      <h6 style={{ color: "red" }}>{JSON.stringify(dirTree)}</h6>
      <h5 style={{ color: "red" }}>{JSON.stringify(docsFiles)}</h5>
      <h1>{Object.values(docsFiles)[0]}</h1>
    </>
  );
};

export default HelloWorld;
