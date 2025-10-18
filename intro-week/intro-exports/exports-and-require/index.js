const somethingFromFile1 = require('./examples/file-1');
const somethingFromFile2 = require('./examples/file-2');
const somethingFromFile3 = require('./examples/file-3');
const somethingFromFile4 = require('./examples/file-4');
const somethingFromFile5 = require('./examples/file-5');
const somethingFromFile6 = require('./examples/file-6');

//console.log(REPLACE_ME_WITH_A_VARIABLE_FROM_ABOVE);
// console.log(somethingFromFile1); //'Vel'

// console.log(somethingFromFile2); //{tutor: 'Vel'}

// console.log(somethingFromFile3); //Is just the function, not invoked...

// console.log(somethingFromFile4); // {add : empty func} - func add to be precise

// console.log(somethingFromFile5); //{printHello: func, add : func add}

// console.log(somethingFromFile6); // undefined? god dang empty object... exporting module.export...

// CHALLENGE 2!
//a
console.log(somethingFromFile2.tutor);
//b
somethingFromFile3();
//c
somethingFromFile5.printHello();




