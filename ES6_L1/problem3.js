// Parameter Destructuring: Write a function printuser that takes a user object with properties name and age. The function should print "Name: [name], Age: [age]"

function printUser(employee){
  //Destructuring employee into name and age
  let {name,age} = employee;
  console.log(`Name: ${name} Age: ${age}`)

}

let Useremployees  = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];
// itearting over the array 
for(let employee of Useremployees){
  printUser(employee)
}