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
