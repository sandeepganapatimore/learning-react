
// Fucntion declaration -> They are Hoisted.
// Meaning of Hoisted-> You can invoke a function before its declaration.
function compliment() {
    console.log("Doing good");
}

compliment();

// Function expression.

const Name = function (firstName) {
    console.log(`You Name is ${firstName}`);
};
Name('Hari');

// returning the function by its name.

const Survey = function (Name, Id, Views) {
    return `${Name}:${Id}:${Views}`
}

console.log(Survey("Gajanan", '56', 'Employment must be increades in all the sources'));

// Default parameters

// Arrow function.
const lordify = (firstName, lastName) => `${firstName} ${lastName}`
console.log(lordify('Sandeep', 'More'));

// We keep this as only one line function because there is only one line statement that has to be returned.
// if there were multiple we can use curly braces.


const proof = (Id, Address) => ({ // (); are very important in Arrow function 

    Identity: Id,
    Nation: Address
});
console.log(proof('1754', 'Indian'));

const regions = {
    Forest: ['Rabbits', 'Gorilla', 'Horse', 'Tiger'],
    print: function (delay = 1000) {
        setTimeout(() => {
            console.log(this.Forest.join('--'));
        }, delay);
    }
};
// Note ARrow function donot block  off scope of "this".
regions.print();

// Destructuring of the objects in javascript for the react.

// Geting the values from the object
// Wecan call it as destructuring of the object.
const info = {
    Name: "Abraham Lincone",
    Profession: "President",
    other: {
        wife: 'Had caring wife',
        strength: 'Public influence',
        efforts: "From 11 years"
    }
}

const getInfo = ({ Name }) => {
    console.log(`The Name of the person is : ${Name}`);
}

getInfo(info);


// Destructuring of the Array.

const [, , Birds] = ['Eagle', 'Parrot', 'Peacock'];
const [, Bird] = ['Eagle', 'Parrot', 'Peacock'];
console.log(Birds);
console.log(Bird);

// object literal Enhancement -> It's the process of restructuring or putting the object back together.

// We can grab the varaibles from the global scope and add them in to an object.

// object literal allows us to pull the global variable in to  objects.

// Examples of object literal .




const sandwich = {
    bread: 'Britania',
    meat: 'Chicken',
    chesse: 'Amol',
    flavor: 'chocolate',
    toppings: ['lettuce', 'tomato', 'mustard']
};

const { bread, meat } = sandwich;
console.log(bread, meat);
// By using ley keyword we change the value of the bread and meant 
// or any object by keeping the original data of the sandwich object same.
let { chesse, flavor } = sandwich;
chesse = 'garlic';
flavor: 'vanilla'
console.log(chesse, flavor);

const skier = {
    name,
    sound,

    powerYell() {
        let yell = this.sound.toUppercase();
        console.log(`${yell}`);
    },
    speed(mph) {
        this.speed = mph;
        console.log('speed:', mph);
    }
};