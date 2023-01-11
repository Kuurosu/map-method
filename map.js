  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let results = [];
for(let num of nums) {
    results.push(num * 2);
}
console.log(results);

// Using map()
const multiByTwo = function(num) {
    return num * 2;
}
const mapResults = nums.map(multiByTwo);
console.log(mapResults);

// Simplified w/ map()
const mapSimple = nums.map(function(num) { return num * 2 });
console.log(mapSimple);

// Simplfied w/ map() + arrow function
const mapEvenSimpler = nums.map(n => n * 2);
console.log(mapEvenSimpler);

// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentWithIds = students.map(student => [student.name, student.id]);
console.log(studentWithIds);
