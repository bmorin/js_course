const fakeApiCall = (args) => {
  return new Promise((resolve) => {
    resolve({ data: args });
  });
};

/**
 *
 * @returns {Promise} a promise that resolves to an object with the following shape:
 * {
 *  name: "Heather",
 * job: "code monkey",
 * age: 420,
 * }
 */
const getDataPromiseChain = () => {
  // TODO: this almost works but it's not quite right
  // what's wrong with this implementation?
  const retVal = {};
  return fakeApiCall({ name: "Heather" }).then((res) => {
    retVal.name = res.data.name;

    return fakeApiCall({ job: "code monkey" }).then((res) => {
      retVal.job = res.data.job;

      return fakeApiCall({ age: 420 }).then((res) => {
        retVal.age = res.data.age;
        return retVal;
      });
    });
  });
};

const getData = async () => {
  // use the async/await pattern to refactor the code above and make the tests pass
  // you should return an object in the same shape as the `retVal` above

  return {
    name: (await fakeApiCall({ name: "Heather" })).data.name,
    job: (await fakeApiCall({ job: "code monkey" })).data.job,
    age: (await fakeApiCall({ age: 420 })).data.age,
  };
};

const handleMultiplePromises = async (promises = []) => {
  return await Promise.all(promises);
};

/**
 * Implement Promise.all
 * @param {Array} promises an array of promises
 * @returns {Array} an array of responses returned from a set of promises
 */
const myPromiseAll = (promises = []) => {
  // this runs all the promises in parallel and resolves
  // when all the promises have resolved or any errors
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = value;
          completedCount++;
          if (completedCount === promises.length) {
            resolve(results);
          }
        },
        (error) => {
          reject(error);
        }
      );
    });
  });
};

module.exports = {
  getDataPromiseChain,
  getData,
  handleMultiplePromises,
  fakeApiCall,
  myPromiseAll,
};
