//const math = require('./math.mjs');  IS USING IN NORMAL JS.

/**
 *  TESTING FUNCTIONS IN ES6
 */
import * as math from './math.mjs' // import all the methods

//Testing the functions.
console.log("___________________________ FUNCTION TEST:")
console.log(`Suma: ${math.sum(1,2)}`)
console.log(`Resta: ${math.rest(1,2)}`)
console.log(`Multiplicacion: ${math.mult(1,2)}`)
console.log(`division ${math.div(1,0)}`) 

console.log("___________________________ OBJECTS TEST:")
/**
 *  TESTING POO IN ES6
 */

import { Polygon } from './Polygon.mjs';

const test = new Polygon(1,2)

 console.log(test.sayName());
