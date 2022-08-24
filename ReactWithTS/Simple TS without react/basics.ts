// Primitives

let age: number;

age = 12;

let myName: string;

myName = "ashu";

let isActive: boolean;

isActive = true;

let hobbies: string[];

hobbies = ["ashu", "as"];

// Type Aliasing

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// Array of Objects

let people: Person[];

people = [
  {
    name: "Hello",
    age: 12,
  },
];

// Type Inference

let course = "Udemy ";

course = "Cousera";

let courseId: string | number = "MY COURSE";

courseId = 124;

// FUNCTIONS AND TYPES

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}



function insertAtBeginning<T>(array:T[], value:T){


    const newArray = [value,...array]

    return newArray;

}


let demoArray=[1,2,3,4,5]

let updatedArray= insertAtBeginning(demoArray, 1)

updatedArray[0].split()


console.log(updatedArray);