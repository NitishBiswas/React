const users = [
  { firstName: "John", lastName: "Doe", age: 26 },
  { firstName: "Rahim", lastName: "Iqbal", age: 26 },
  { firstName: "Shakib", lastName: "Al Hasan", age: 33 },
  { firstName: "Lionel", lastName: "Messi", age: 33 },
  { firstName: "Christiano", lastName: "Ronaldo", age: 37 },
];

// Task 1
var fullName = [];
users.filter((user) => {
  if (user.age > 30) {
    fullName = [...fullName, user.firstName + " " + user.lastName]
  }
});
console.log('\n1. Full name of each person who are older than 30\n');
console.log(fullName, '\n');

// Task 2
var sameAge =  {};
users.filter((user) => {
  if (sameAge.hasOwnProperty(user.age)) {
    sameAge[user.age] += 1;
  } else {
    sameAge[user.age] = 1;
  }
})

console.log('\n2. Count people that are the same according to their age\n');
console.log(sameAge, "\n");
