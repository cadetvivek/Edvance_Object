// highestStudentCountDepartment that returns the department (name) with the highest number of students. Define a highestStudentCountDepartment function that takes input as school (Object).

//   highestStudentCountDepartment return string as ${highest count dept}
//   console.log(highestStudentCountDepartment(school));//math


function  highestStudentCountDepartment(school){
  let highest = 0;
  let highestDept = {};
  for(let i=0;i<school.departments.length;i++){
    let {name,students} = school.departments[i];
    if(students>highest){
      highest=students;
      highestDept = school.departments[i];
    }
  }
  console.log(highestDept.name)
}


const schoolData= {
  name: "XYZ School",
  establishYear: 1990,
  departments: [
    { name: "math", teachers: 5, students: 150 },
    { name: "science", teachers: 4, students: 120 },
    { name: "history", teachers: 3, students: 100 },
    { name: "english", teachers: 4, students: 130 },
  ],
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

 highestStudentCountDepartment(schoolData)