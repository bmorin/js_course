/**
 * Return a greeting
 *
 * @returns {string} `Hey my name is <person name>
 */
function personGreeting() {
  return `Hey my name is ${this.name}`;
}

/**
 * Returns a string
 *
 * @param {string} like1
 * @param {string} like2
 * @returns {string} My name is {name} and I am a {job} and like {like1} and {like2}
 */
function personSmallTalk(like1, like2) {
  return `My name is ${this.name} and I am a ${this.job} and like ${like1} and ${like2}`;
}

/**
 * Returns a string
 *
 * @param {string[]} hobbies
 * @returns {string} Hey my name is {name} and I like {hobbies}
 */
function listHobbies(...hobbies) {
  // Join hobbies with commas and 'and' before the last hobby
  hobbyList = hobbies.length <= 2
    ? hobbies.join(' and ')
    : `${hobbies.slice(0, -1).join(', ')} and ${hobbies.at(-1)}`;

  return `Hey my name is ${this.name} and I like ${hobbyList}`;
}

// HINT: leverage the `call` method to make the following functions work as expected

Function.prototype.myBind = function (context, ...args) {
  const originalFunc = this;
  return function (...newArgs) {
    return originalFunc.call(context, ...args, ...newArgs);
  };
};

Function.prototype.myApply = function (context, args = []) {
  return this.call(context, ...args);
};

module.exports = {
  personSmallTalk,
  listHobbies,
  personGreeting,
};
