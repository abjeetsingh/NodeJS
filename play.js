const person = {
  name: "Abjeet",
  age: 20,
  sayHello() {
    console.log("Hello I Am" + this.name);
  }
};
// created a dictionary

// creating a list

let val = ["Hello", "Abjeet"];
let coppiedval = [...val]; // spread operator
let fun = (...args) =>  args.map((v) => v+4); // rest operator
console.log(fun(1,2,3,4,5,6,7));