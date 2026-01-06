//console.log ("Hello, World!.");
//console.log ("This is a test JavaScript file.");

/* 
console.log ("JavaScript is working!");
console.log ("Let's do some coding.");
/
// String , number, Boolean, Object, Arry
/
// String
let fname = "John"; // String
let age = 30; // Number
let height = 5.9; // Number
const PI = 3.14; // Constant

fname = "Alice";
console.log ("Name:", fname);
PI = 3.14
fname = "Bob";
console.log ("Name:", fname);
console.log ("Age:", age);
console.log ("Height:", height);
/*
/**
 + = บวก
 
= ลบ
= คูณ/ = หาร% = หารเอาเศษ*/
/*
let number1 = '10';
let number2 = '3';

let result1 = number1 + number2;
console.log ("ผลบวก = ", result1);
/
/
 == เท่ากับ (เปรียบเทียบค่า)
 != ไม่เท่ากับ (เปรียบเทียบค่า)
 
มากกว่า
 < น้อยกว่า
 >= มากกว่าหรือเท่ากับ
 <= น้อยกว่าหรือเท่ากับ
  */
/*let number1 = 5;
 let number2 = 5;
 / let condition = number1 <= number2; // Boolean ค่าความจริง ture/false
 console.log ("condition=", condition);

 if (number1 > number2) {
        console.log ("number1 is greater than or equal to number2");
    } else if (number1 < number2) {
        console.log('this is else if');

    } else {
        console.log('this is else');
    }
 
 */
/*
Grade 
    >=80 เป็นเกรด A
    >=70 เป็นเกรด B 
    >=60 เป็นเกรด C
    >=50 เป็นเกรด D
    <50 เป็นเกรด F

 */
//     let score = 75;
//  // if - else condition
//     if (score >= 80) {
//         console.log ("A");
//     } else if (score >= 70) {
//         console.log('B');
//     }else if (score >= 60)
//         console.log('C');
//     else if (score >= 50) {
//         console.log('D');

//     }else {
//         console.log('F');
//     }
/*
 
&& เเละ
|| หรือ
! not หรือ ไม่ใช่
*/

// let number1 = 10
// let number2 = 20

// let condition = (number1 > 0) && (number2 > 0) // true && true = true
// console.log ("condition:", condition1)


// let age = 25
// let gender = 'male'
// if(age >= 18 && gender == 'male') {
//     console.log ("่คุณสามารถเข้าร่วมกิจกรรมได้");

// let number = 30

// if (number % 2 == 0) {
//     console.log ("เป็นเลขคู๋");
// }
// else {
//     console.log ("เป็นเลขคี่");
// }
/*
while 
for
*/

//let count = 0;
//while (count <= 5) { //true 
    //conter = conter + 1;
//    conter += 1
//    console.log ("while:", count);
//}

//for (let i = 0; i <= 5; i = i + 1) {
//    console.log ("for:", i);
//}

/**
 array
 */

 /**
 let age1 = 25;
 let age2 = 30;
 let age3 = 35;
console.log(age1,age2,age3); // 25 30 35

let ages = [25,30,25];
console.log(ages); // [25,30,35]
console.log(ages[1]); // 25 30 35

//แทนที่ค่าใน array
age = [40,45,50];
console.log(ages); // [40,45,50]

// ต่อarray
ages.push(55);
console.log(ages); // [40,45,50,55]

//ความยาวของarray
console.log(ages.length);//4

//ลบสมาชิกตัวสุดท้ายของarray
ages.pop();
console.log(ages);// [40,45,50]

if (ages.includes(45)){
    console.log("พบ 45 ในarray"); //พบ45ในarray
}

let numbers = [90,60,80,40,50];
numbers.sort();
console.log(numbers); // [40,50,60,80,90]

let names = ["John","Jane","Doe"];
names.push("Smith");
console.log(names);
console.log(names.length);

for (let i = 0; i< names.length; i++) {
    console.log(names[i]);
}
 
let student = [{
    age: 20,
    name: "Emma",
    grade: 'A'
},{
    age: 22,
    name: "Liam",
    grade: 'B'
}];

student.pop();

for (let i=0; i <student.length;i++){
    console.log("Student" + (i+1)+":")
    console.log("Name:" + student[i].name)
    console.log("Age:" + student[i].age)
    console.log("Grade:" + student[i].grade)


}

student.push({
    age: 21,
    name: "Olivia",
    grade: 'A'
});
console.log(student);
*/
/**
 function
 */

 //ประกาศ function
 /**
 function calculate_grade(score){
    if (score>=90){
        grade = 'A';  
    } else if (score >= 80){
        grade = 'B';
    } else if (score >= 70){
        grade = 'C';
    } else if (score >= 60){
        grade = 'D';
    } else {
        grade = 'F';      
    }
    return grade;
 }

 //เรียกใช้function
 let student_score = 85;
 let student_grade = calculate_grade(student_score);
 console.log("Student's grade is:"+ student_grade);

 let score = [10,20,30,40,50];

 for (let i=0; i<score.length;i++){
    //console.log('Score at index '+ i + ' is ' + score[i]);
    console.log(`Score at index ${i} is ${score[i]}`);``
 }
 

 score.forEach((s)=>{
    console.log('score',s)
 })

 score[0] = score.map((s) => {
    return s * 2
 })

 score.forEach((s)=>{
    console.log('new score:',s)
 })
    
/**
array + function
  */
/** 
 let score = [10,20,30,40,50];



 for (let index = 0; index <score.length; index++) {
    console.log('score',score[index])
 }

 let newScore = score.filter((s) => {
    return s >= 30
 })

 newScore.forEach((ns)=>{
    console.log('new score:',ns)
 })
 
*/  

/**
 *  Object + function
 */

let students = [
    {
        name:'aa',
        score:'50',
        grade:'A'
    },
    {
        name:"bb",
        score:'60',
        grade:'B'
    }
]

console.log('Student : ',students[0])

let student = students.find((s) => {
    if (s.name == 'bb'){
        return true
    } else {
        return false
    }
})

let doublescore_student = students.map((s) => {
    s.score = s.score * 2
    return s
})

console.log('students',student)
console.log(doublescore_student)

let highscore_student = students.filter((s) => {
    if (s.score >= 110) {
        return true
    }
})

console.log('highscore_student:',highscore_student)