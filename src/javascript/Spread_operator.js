//Spread operato  ...

//--> The spread operator is three dots ( ... ) that perform several different tasks. First, the
//-->  spread operator allows us to combine the contents of arrays.


const Mountains = ["Mounteverst", "Columbai", "Tirupati"];
const River = ["Ganga", "Godavari"];
const Connection = [...Mountains, ...River];
console.log(Connection.join(", "));


// let’s imagine that we wanted to grab the
// last item from the array rather than the first. We could use the Array.reverse
// method to reverse the array in combination with array destructuring:     

const Garden = ["Rose", "Lotus", "Jasmine"];
const [last] = Garden.reverse();
console.log(last); // Rose
console.log(Garden.join(", "));


// The spread operator can also be used to get the remaining items in the array: 
// they are called as rest operator.


// We can also use the three-dot syntax to collect function arguments as an array. When
// used in a function, these are called rest parameters..

function directions(...args) {
    let [start, ...remaining] = args;
    let [finish, ...stops] = remaining.reverse();
    console.log(`drive through ${args.length} towns`);
    console.log(`start in ${start}`);
    console.log(`the destination is ${finish}`);
    console.log(`stopping ${stops.length} times in between`);
}
directions("Satara",'Karad','Raigad','Kholapur');


// The directions function takes in the arguments using the spread operator.
// The first argument is assigned to the start variable. The last argument is assigned to a finish
// variable using Array.reverse .


// The spread operator can also be used for objects
// Using the spread operator with objects is similar to using it with arrays

const cropping={
    moonsoon:'Wheat',
    summer:"Grapes"
};

const farming='seasonal cultivation'

const cultivation={
    ...cropping,
    farming
};

console.log(cultivation);
