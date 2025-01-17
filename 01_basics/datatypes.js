"use strict";

// alert(3 + 3)

//let name = "Hitesh" //STRING
//let age = 23 //number
//let isLoggedIn = false // boolean

// ***************************************//

// PRIMITIVE

let temp;

const id = Symbol('123');
const id2 = Symbol('123')

//console.log(id === id2);

const bignumber = 34234235234545435453464n

//REFERENCE OR NON-PRIMITIVE
//ARRAY
const heroes = ["abc", "def", "ghi"];
// OBJECT
let myobj = {
    name : "anubhab",
    age : 22,
}
// FUNCTION
const myfunction = function(){
//    console.log("Hello world");
    
}

//console.log(typeof temp);

// ******************************** STACK AND HEAP MEMORY **************************************************

let a = 123
let b = a
b = 456

//console.log(a);
//console.log(b);

let userone = {
    name: "anubhab",
    id: 101
}

let usertwo = userone
usertwo.name = "seezen"

console.log(userone.name);
console.log(usertwo.name);
