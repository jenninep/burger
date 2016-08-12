// Inside burger.js, import orm.js into burger.js
var ORM = require('../config/orm');

// Also inside burger.js, create the code 
// that will call the ORM functions using
//  burger specific input for the ORM.
//  
var BURGER = {

    all: ORM.selectAll,
    create: ORM.insertOne,
    update: ORM.updateOne

};
// SIDES = {

//     all: ORM.selectAll("sides"),
//     create: ORM.insertOne,
//     update: ORM.updateOne

// }

// BURGER = {

//     all: ORM.selectAll("burger"),
//     create: ORM.insertOne,
//     update: ORM.updateOne

// }

// Export at the end of the burger.js file.
// me
module.exports = BURGER;
// BURGER.all;
// BURGER.all();

// var x = 3;
// var y = x;
// console.log(y + 2);

// var fx = function() {
// console.log('i am fx');
// }
// fx();
// var fy = fx;
// fy();

// ORM.selectAll;
// BURGER.all= ORM.selectAll;
// ORM.selectAll();
// BURGER.all();
// BURGER.create("newburger", false);