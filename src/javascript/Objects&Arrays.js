// objects and arrays.


// -> Javascript syntax has supported creative ways scoping the varaibles in the objects
// -> and arrays.

// Destructuring assignment allows you to locally scope fields within an objects and to declare 
// -> which values to be used. consider the sandwich object. it has four keys but we only want 
// to use values of two.
    

// Below is the code for destructuring the data .
// Here we pull out two specific data from the objects.
// If we destructures this varabile using let function we can change the .
// For example if we destructure the varaible using let keyword. we change the varaible 
// Without changing the original content.
 
const campus={
    Id:'Sandeep More',
    Year:"Final year",
    Branch:"Computer Science",
    Interest:'Football',
    Passion:'Earner',
    Skills:['Javascript','React js','Data Structure']
};

const{Id,Skills}=campus;
let{Pasison,Interest}=campus;

Passion='learner';
Interest='Developing the Apps ';

console.log(Passion,Interest); // learner Developing the Apps

console.log(Id,Skills); //  Sandeep More ,['Javascript','React js','Data Structure'g]

// const sandwich = {
//     bread: "dutch crunch",
//     meat: "tuna",
//     cheese: "swiss",
//     toppings: ["lettuce", "tomato", "mustard"]
//     };
//     const { bread, meat } = sandwich;
//     console.log(bread, meat);

// We can also destrucutre the incoming function argumentss. Consider the function  
//  that would take person's firstname out of the log

const Gatekeeper=Nightwatch=>{
        console.log(`${Nightwatch.firstname} is the commander of the gate`);
};
const Nightwatch={
    firstname:'John',
    lastname:'Snow'
};
Gatekeeper(Nightwatch);


// Now let's take step ahead Nightwatch has nested object Blood

const Gatekeepers=({Blood:{father}},Nightwatchs)=>{
    // console.log(`${Nightwatch.firstname} is the commander of the gate`);
    console.log(`${father} is the father  of ${Nightwatch.firstname} `);
};
 
const Nightwatchs={
firstname:'John',
lastname:'Snow',
Blood:{
    father:'Ned Stark',
    ruler:'North'
}
};
Gatekeepers(Nightwatchs)


// const regularPerson = {
//     firstname: "Bill",
//     lastname: "Wilson",
//     spouse: {
//     firstname: "Phil",
//     lastname: "Wilson"
// }
// };


// const lordify = ({ spouse: { firstname } }) => {
//     console.log(`${firstname} of Canterbury`);
//     };
//     lordify(regularPerson); // Phil of Canterbury


// Destructuring of the Array:-
// Values can be destructured from the arrays.

const[,,third]=['Tiger','Loin','Elephant','Fox'];
console.log(third);