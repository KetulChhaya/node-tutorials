//CommonJS - Every file is a module (by default)
//Modules - Encapsulated code (only sharing minimum)
const names = require("./4-names"); //imported from 4-names.js
const sayHi = require("./5-utils"); //imported from 5-utils.js
const data = require("./6-alternative-flavour");
require("./7-mind-grenade");
// console.log(names)
// console.log(sayHi)
// console.log(data)

sayHi(names.john);
sayHi(names.peter);
sayHi("King");
sayHi(data.singlePerson.city);
sayHi(data.items);
