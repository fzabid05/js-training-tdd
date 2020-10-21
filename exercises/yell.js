'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

const yell = (str) => str.toUpperCase();

//* Begin of tests
const assert = require('assert');
assert.strictEqual(yell('lolo'), 'LOLO')
assert.strictEqual(yell('good'), 'GOOD')
assert.strictEqual(yell('happy'), 'HAPPY')
// assert.fail('You must write your own tests');
// End of tests */
