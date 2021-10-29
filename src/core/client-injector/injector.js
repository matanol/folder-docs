(() => {
  console.log('inject started');

  // grab the element where we'll output the HTML to
  const output = document.querySelector('body');

  // create a 'cache' where we can store our built up HTML from our fragments
  const htmlFragmentCache = {};

  // here, we're creating an anonymous function that loads up our HTML fragments
  // then it adds them to our cache object
  const importAll = (requireContext) =>
    requireContext
      .keys()
      // eslint-disable-next-line no-return-assign
      .forEach((key) => (htmlFragmentCache[key] = requireContext(key)));

  // next, we call our importAll() function to load the files
  // notice how this is where we call the require.context() function
  // it uses our file path, whether to load subdirectories and what file type to get
  importAll(require.context(__MAIN_DIR__, true, /.md$/));

  console.log(htmlFragmentCache);
  // finally, we can loop over our cache's keys and add the HTML to our output element
  Object.keys(htmlFragmentCache).forEach(
    // eslint-disable-next-line no-return-assign
    (key) => (output.innerHTML += htmlFragmentCache[key].default)
  );

  // const injectEvent = new CustomEvent('inject');

  // window.dirTree = __DIR_TREE__;
  // window.docFiles = __DOC_FILES__;

  // // Dispatch the event.
  // window.dispatchEvent(injectEvent);
})();
