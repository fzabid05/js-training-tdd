'use strict';

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

// Your code:

const keepFirst = (str) => str.substr(0,2) ;

const keepLast = (str) => str.substr(-2) ;

const keepFirstLast = (str) => str.substr(3,2) ;

//* Begin of tests
const assert = require('assert');
assert.deepStrictEqual(keepFirst('developer'), 'de');
assert.deepStrictEqual(keepLast('developer'), 'er');
assert.deepStrictEqual(keepFirstLast('developer'), 'el');
// assert.fail('You must write your own tests');
// End of tests */
