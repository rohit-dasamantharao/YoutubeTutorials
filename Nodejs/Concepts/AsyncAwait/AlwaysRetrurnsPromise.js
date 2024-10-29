async function foo() {
    return 1;
  }

  /* same as this */
  function foo() {
    return Promise.resolve(1);
  }