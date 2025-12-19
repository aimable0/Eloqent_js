// High order functions

const { act } = require("react");

// let's simulate a function that turns on the light
// we will pass it a list of bulbs and it will turn them on

function switchLights(lights, turnOn) {
    for (let light of lights) {
        turnOn(light);
    }
}

switchLights(["Light1", "Light2", "Light3", "Light4", "Light5"], light => console.log(`Turning on: ${light} ...`));

// a simple high-order function to detect whethers a student passed

function studentPassed(passingMarks) {
    return studentsMarks => studentsMarks >= passingMarks;
}

let studentPassed50 = studentPassed(50);
console.log(studentPassed50(10));

// how would we check a list of students and print whether they failed or passed

function repeat(students, action) {
    for(let student of students) {
        action(student);
    }
}

let studentsRecords = [
    {name: "Aimable",
     grade: 50},
    {name: "Carine",
     grade: 70},
    {name: "JeanLuke",
     grade: 90},
    {name: "Mary",
     grade: 90},
    {name: "Didier",
     grade: 50},
];

function displayStudentStatus(student, studentPassed) {
    let status = (studentPassed(student.grade)) ? 'Passed' : "Failed";
    console.log(`${student.name} ${status}`);
}

repeat(studentsRecords, displayStudentsGrade);