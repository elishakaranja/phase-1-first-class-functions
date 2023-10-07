
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {}
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {};
  }
  
  module.exports = { receivesAFunction, returnsANamedFunction, returnsAnAnonymousFunction };