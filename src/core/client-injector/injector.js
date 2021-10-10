console.log("inject started");

const injectEvent = new CustomEvent("inject");

window.dirTree = __DIR_TREE__;
window.docFiles = __DOC_FILES__;

// Dispatch the event.
window.dispatchEvent(injectEvent);
