// Destructuring to Swap: Define a function destructuringToSwap that takes an array of employee objects, 'employees', as a parameter. Use destructuring to swap the values of the first and last employees in the array. Return the modified employees' array.

// Output: [ { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }, { name: 'Jane Smith', age: 28, department: 'Finance', salary: 60000 }, { name: 'John Doe', age: 30, department: 'HR', salary: 50000 } ]

function destructuringToSwap(employees){
  //Destructuring employees[0] into name, age, department and salary
  //this is a for first employee
  let {name:name1,department:department1,salary:salary1} = employees[0];
  // this is a for last employee
  let {name:name2,department:department2,salary:salary2} = employees[2];
  // here i swap the value of first and last employee
  employees[0] = {name:name2,department:department2,salary:salary2};
  employees[2] = {name:name1,department:department1,salary:salary1};
  console.log(employees)
 
}
let employeesTeam  = [
    { name: "John Doe", age: 30, department: "HR", salary: 50000 },
    { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
    { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
  ];

  destructuringToSwap(employeesTeam)