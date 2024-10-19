// var example
function varExample() {
  var x = 10;
  // var x = 12; // no error
  if (true) {
    var x = 20; // same variable
    console.log(x); // 20
  }
  console.log(x); // 20
}

// let for 

// let example
function letExample() {
  let y;
  y = 10;
  // let y = 12; // Error: Identifier 'y' has already been declared
  if (true) {
    let y = 20; // different variable
    console.log(y); // 20
  }
  console.log(y); // 10
}

// const example
function constExample() {
  const z = 10;
  // z = 20; // Error: Assignment to constant variable.
  console.log(z); // 10
}

varExample();
letExample();
constExample();