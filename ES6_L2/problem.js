// You are responsible for managing student enrollment and generating statistics for a school using multilevel destructuring and other JavaScript concepts. 
// Extract the mathTeachersCount, historyTeachersCount, mathStudentsCount, and historyStudentsCount using multilevel destructuring. Define a countCalculation function that takes input as school. 

// countCalculation return an object with math TeachersCount, history TeachersCount, mathStudentsCount, and historyStudentsCount


//  Output: {  
//   mathTeachersCount: 5,
//   historyTeachersCount: 3,
//   mathStudentsCount: 150,
//   historyStudentsCount: 100
// }



function countCalculation(school){
  const  {
    departments:{
      math:{teachers:mathTeachersCount,students:mathStudentsCount},
      history:{teachers:historyTeachersCount,students:historyStudentsCount}
    },
    
  } = school;
  return {
    mathTeachersCount,
    historyTeachersCount,
    mathStudentsCount,
    historyStudentsCount
  };
  
}


const schoolData= {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};
console.log(countCalculation(schoolData))



