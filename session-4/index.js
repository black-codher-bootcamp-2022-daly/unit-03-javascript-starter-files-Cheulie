// ****************************************************TASK 1 - OBJECTS****************************************************


const personA  = {
    name: "Belinda",
    age: 42,
    location: "London",
    likes: "travelling",
};

const personB  = {
    name: "Anthony",
    age: 42,
    location: "London",
    likes: "alcohol",    
};

const personC = {  
    name: "Nana",
    age: 35,
    location: "London",
    likes: "lobster",
};

const personD = {
    name: "Evie",
    age: 35,
    location: "Hatfield",
    likes: "dancing",
};

function biography (person) {
    
    return "Hi my name is " + person.name + ". I am " + person.age + " years old, I live in " + person.location + " and I like " + person.likes + "'" 
}

console.log(biography(personC));


// ****************************************************TASK 2 - MATHS OPERATORS****************************************************
// ***Uncomment the code below to begin the task***

const x = 6;
const y = 4;

const addition = x + y;

console.log("Addition: x + y " + addition);

const subtraction = x - y;

console.log("Subtraction: x - y " + subtraction);

const multiplication = x * y;

console.log("multiplication: x * y " + multiplication);

const division = x * y;

console.log("Division: x + y " + division);

const squareOfX = x * x;

console.log("The square of X is " + squareOfX);

console.log("The square of X in " + squareOfX);
















// ****************************************************TASK 3****************************************************

const age = 42;
const minDrivingAge = 17;

const isOldEnoughToDrive = (age > minDrivingAge);

console.log( "Is Tammy is old enough to drive");

// ***************************************************Homework ************************************************
function addNumbers(x,y) {
    return x + y
};

function subNumbers (x,y) {
    return x - y
};



const calculator = { 
    add: addNumbers ,
    subtract: subNumbers ,
    //multiply: function  multiNumbers (x,y) {
    //    return x * y;
  //  };

//console.log(calculator.add(2,3))



//const mentors = 20;
//const students = 24;
//const pizzas = 25;

//const isMoreStudentsThanVolunteers = students > mentors;
//console.log ("Are there more students than volunteers?" + isMoreStudentsThanVolunteers);

//const isLessStudentsThanPizza = students < pizzas;
//console.log("Are there fewer number of students than there are boxes of pizza" + isLessStudentsThanPizza);




//********************* Homework to compare the ages of two people **************************

//const gigi = {
    age: 12,
    name: "gigi",
};

const jimy ={
    age: 122,
    name: "jimy",
}

const pinky = {
    age: 45,
    name: "pinky"
};

function whoIsOlder (personA, personB) {
    const isAGreaterThanB = personA.age > personB.age
    const ageDifference = personA.age - personB.age
}
