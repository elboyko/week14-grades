const array = [];
let randomGradeOne = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeOne);
let randomGradeTwo = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeTwo);
let randomGradeThree = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeThree);
let randomGradeFour = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeFour);
let randomGradeFive = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeFive);
let randomGradeSix = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeSix);
let randomGradeSeven = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeSeven);
let randomGradeEight = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeEight);
let randomGradeNine = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeNine);
let randomGradeTen = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeTen);
let randomGradeEleven = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeEleven);
let randomGradeTwelve = Math.floor(Math.random() * 100 + 1);
array.push(randomGradeTwelve);
console.log(array); //вывела массив в консоль, чтобы проверить правильность


const averageGrade = Math.floor(array.reduce((acc, item) =>
   acc + item) / array.length);

console.log('средняя оценка:', averageGrade); // выводим среднюю оценку

const maxGrade = Math.max(...array);
console.log('максимальная оценка:', maxGrade); // максимальная оценка
const minGrade = Math.min(...array);
console.log('минимальная оценка:', minGrade); // минимальная оценка

const gradeUpper60 = array.filter((item) => item >= 60).length;
console.log('количество студентов с оценкой выше 60 баллов:', gradeUpper60);//количество студентов с оценкой выше 60 баллов

const gradeLower60 = array.filter((item) => item < 60).length;
console.log('количество студентов с оценкой ниже 60 баллов:', gradeLower60);//количество студентов с оценкой ниже 60 баллов

const letterGrades = array.map((item) => {
   if (item >= 80) return "A";
   if (item >= 60) return "B";
   if (item >= 40) return "C";
   if (item >= 20) return "D";
   else return "E";

})
console.log('Формат буквенных оценок: ', letterGrades); // буквенные обозначения оценок

