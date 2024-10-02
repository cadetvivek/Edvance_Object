// Highest Paid: Define a function highest Paid that takes an array of employee objects, 'employees', as a parameter. Use destructuring to find the employee with the highest salary. Return the employee object with the highest salary.
//console.log(employeesTeam)
//console.log(highestPaid(employees)); // Output: { name: 'Alex Johnson', age: 35, department: 'IT', salary: 70000 }

function highestPaid(employees){
  let highest = 0;
  let highestPaidEmployee = {};
  for(let i=0;i<employees.length;i++){
    //Destructuring employees[i] into name and salary
    let {name,salary} = employees[i];
    if(salary>highest){  // check highest salary 
      highest = salary;
      highestPaidEmployee = employees[i]; // update highestPaidEmployee
    }
  }
  console.log(highestPaidEmployee)
 
}

const employeesTeam = [
{ name: "John Doe", age: 30, department: "HR", salary: 50000 },
{ name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
{ name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

highestPaid(employeesTeam)       