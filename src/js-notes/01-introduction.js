import heroes, {owners} from './data/heroes.js';

// 01 - Simple varible 
const myPhrase = "Hello, world!";

// 02 - Json Object 
const myDataJson = {
    nombre: "Miguel1",
    apellidos: "Medina",
    edad: 33,
    data: {
        hijos: 2,
        esposa: "Milagros",
    }
}; 

// 03 - Arrays
const arrayA = [1, 2, 3, 4];
arrayA.push(7, 8);

const arrayB = arrayA.map((a) =>a*2);

// 04 - Copy by value

const newArray = [...arrayA, ...arrayB];
const newObject = {...myDataJson};

// 05 - Functions 
const saludar = function (myPhrase) {
    return "Hello, " + myPhrase;
}

const getObject = () => ({
    value: "true",
});

const getArray = () => [1, 2, 24];

// 06 - Desestructuring
const {nombre: nuevoNombre = "defaultValue", data: {hijos: hijitos = 0, mascotas: mascotitas = 0}} = myDataJson;

// 07 - Array Desestructuring
const [, , pos3] = arrayB

// Functions in Json Object

const resultOne = heroes.find((h) => h.id == 2);
const resultMany = heroes.filter((h) => h.owner == 'DC');


// A - Prints
console.log("Concatenation", `Hellos world ${myPhrase}`);
// console.table(myDataJson);
// console.log("Filter array", arrayB);
// console.log("Function", saludar("MyFriend"));
// console.log("ArrowFunction return json", getObject());
// console.log("ArrowFunction return array", getArray());
// console.log("Concatenate array by value", newArray.length, newArray, );
// console.log("Copy json by value", newObject);
// console.log("Destructuration", nuevoNombre, hijitos, mascotitas);
// console.log("Array Destructuration", pos3);
console.log("Data imported 1", heroes.length);
console.log("Data imported 2", owners);
console.log("Data imported - resultOne", resultOne);
console.log("Data imported - resultMany", resultMany);