console.log("inject");

const customEvent = new CustomEvent("build");

// Listen for the event.
// window.addEventListener(
//   "build",
//   function (e) {
//     console.log("dispatched!!");
//   },
//   false
// );

const __TEST2__ = __MY_TEST__;
window.MY_TEST = __MY_TEST__;
// Dispatch the event.
window.dispatchEvent(customEvent);
