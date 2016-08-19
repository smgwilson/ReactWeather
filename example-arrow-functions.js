var names = ['Sheri', 'Justin', 'Kyle', 'Alex', 'Chris']
//
// names.forEach(function(name) {
//   console.log('forEach', name);
// });
//
// names.forEach ((name) => {console.log('arrowFunc', name)});
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Sheri'));
//
// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// var individual = {
//   name: 'Andrew',
//   hello: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();
//
// individual.hello();

function add (a, b) {
  return a + b;
}

console.log(add(3,5));
console.log(add(6,3));

var addExpression = (a,b) => a + b;

console.log(addExpression(4,1));


var addStatement = (a, b) => {
  return a + b;
}

console.log(addStatement(3,11));
