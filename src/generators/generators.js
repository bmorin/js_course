/**
 * Return an iterator counting down from the initial number
 *
 * @param {number} initial initial num to start loop
 * @returns {iterator} ex: {value: 1, done: false}
 */
function* forLoopGenerator(intial) {
    for (let i = intial; i > 0; i--) {
        yield i;
    }
}

/**
 * Return an iterator generating a unique id
 *
 * @returns {iterator} ex: {value: 1231234, done: false}
 */
function* generateRandomId() {
    for (let i = 1; ; i++) { // Allow 0 to be used as a sentinel value
        // Unsure if this should be a random number or just a unique number
        yield i;
    }
}

module.exports = {
    forLoopGenerator,
    generateRandomId,
};
