// Here we will learn about scope, scope-chain, lexical environment (scope)

// scope means where you can access a specific variable inside your code...
// when an execution context is created along with it the lexical environment of the parent is also created.
// along with the local memory space we also get the lexical environment space of the parent's variable or function

function a() {
  var b = 10;
  c();
  function c() {
    var c = 10;
    console.log(b);
  }
}

a();
