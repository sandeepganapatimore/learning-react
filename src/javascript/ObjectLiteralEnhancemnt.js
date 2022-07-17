// Restructuring of the elements is known as On=bject literal Ennhancement 
// Through this we can grab the varaibles form the local scope and add them to an objects 

const  country='Italy';
const speciality='Italic Food';
// We can also create object method with object literal enhancement or restructuring 
const print=()=>{
    console.log(`I went to ${this.country} to taste the ${this.speciality}`);
};

const World={country,speciality,print};
console.log(World.print());

const skier = {
    
    sound,
    powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!!`);
    },
    speed(mph) {
    this.speed = mph;
    console.log("speed:", mph);
    }
    };  

//     Object literal enhancement allows us to pull global variables into objects and reduces
// typing by making the function keyword unnecessary.