//////////////////////// AUFGABE 6 /////////////////////////////////
import { classroom } from "./classroom";

export const studentsCount = Object.keys(classroom).length;
// Secondary Functions
let isBoy = student => student.sex === 'M';
let isGirl = student => student.sex === 'F';
// FILTER functions
let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));
// REDUCE function
let average = grades => (grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length);
// MAP functions
let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

// Higher Order functions
let classroomAverage = average(classroom) // 10.2
let boysAverage = average(getBoys(classroom)) // 7
let girlsAverage = average(getGirls(classroom)) // 13.4
let highestBoysGrade = maxGrade(getBoys(classroom)) // 16
let lowestBoysGrade = minGrade(getBoys(classroom)) // 2
let highestGirlsGrade = maxGrade(getGirls(classroom)) // 18
let lowestGirlsGrade = minGrade(getGirls(classroom)) // 9


export const ausgabe6 =  [classroomAverage, boysAverage, girlsAverage, highestBoysGrade, lowestBoysGrade, highestGirlsGrade, lowestGirlsGrade];

export default function loesung6() {
  return "<span style='color:rgb(255,0,0);'>Noch keine Lösung vorhanden.</span>"
}