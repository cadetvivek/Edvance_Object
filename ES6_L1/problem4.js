// Combining Arrays: Define a function combiningArrays that takes two arrays, 'fruits' and 'vegetables, as parameters. Create a new array 'groceries' by combining both arrays using the spread operator. Return the 'groceries' array.

// Output: [ 'apple', 'banana', 'orange', 'carrot', 'broccoli', 'spinach' ]
function combiniingArrays(fruits,vegetables){
  let groceries = [...fruits,...vegetables];
  console.log(groceries)
}

const arr1 = ["apple", "banana", "orange"];
const arr2 = ["carrot", "broccoli", "spinach"];

combiniingArrays(arr1,arr2)
