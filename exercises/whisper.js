'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

const whisper = (str) => str.toLowerCase();

//* Begin of tests
const assert = require('assert');

assert.strictEqual(whisper('SALUT'), 'salut');
assert.strictEqual(whisper('hOllA'), 'holla');
assert.strictEqual(whisper('bonjour'), 'bonjour');
// assert.fail('You must write your own tests');
// End of tests */
