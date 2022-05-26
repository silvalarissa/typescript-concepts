"use strict";
// boolean (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = 'hello';
// number (float, int, decimal, hex, binary)
let total;
total = 100;
//array (arrayType[])
let myArray;
myArray = [1, 2, 3];
//Generic
let items;
items = [4, 5, 6];
// tuple [type, type, ... , type]
let tuple;
tuple = [1, '2', [3]];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (melhor não usar)
let thing;
thing = 'olá';
thing = 1;
thing = true;
// void
function logger() {
    console.log('olá');
}
// null || undefind
let username;
username = 'larissa';
// never
function error() {
    throw new Error('error');
}
// object
let myObj;
myObj = {
    username: 'larissa',
    age: 25
};
//type inference
let text = 'my text'; //implicitamente é uma string
// let text: string = 'my text' é redundante
