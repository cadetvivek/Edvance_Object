// Cloning Objects: Define a function cloningObjects that takes an object 'person' with properties 'name', 'age', and 'address' as a parameter. Create a new object 'personCopy' by cloning the 'person' object using the spread operator. Return the 'personCopy' object.

// Output: { name: "John", age: 30, address: "123 Main St" }

function cloningObjects(person){
  let personCopy = {...person};
  console.log(personCopy)
}


const personData = { name: "John", age: 30, address: "123 Main St" };
cloningObjects(personData)
 