const students = [
  { name: "Anna", score: 92 },
  { name: "Ben", score: 67 },
  { name: "Chris", score: 81 },
  { name: "Diana", score: 74 },
  { name: "Evan", score: 59 }
];

function analyzeGrades(students){
  let average = 0;
  let highest = 0;
  let lowest = students[1].score;
  let passing = [];
  let failing = [];
  
  for (let i=0; i < students.length; i++){
    average += (students[i].score) / students.length;
    if (students[i].score > highest){
      highest = students[i].score;
    }

    if(students[i].score < lowest){
      lowest = students[i].score;
    }

    if(students[i].score >= 75){
      passing.push(students[i].name);
    } else {
      failing.push(students[i].name);
    }
  }

  return {
    average,
    highest,
    lowest,
    passing,
    failing
  }
};

console.log(analyzeGrades(students));