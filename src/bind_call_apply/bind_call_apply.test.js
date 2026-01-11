const {
  personSmallTalk,
  listHobbies,
  personGreeting,
} = require("./bind_call_apply");

require("./bind_call_apply");

const chadObj = {
  name: "Chadwick",
  age: 33,
  job: "Engineer",
};

const sallyObj = {
  name: "Sally",
  age: 38,
  job: "Principal Engineer",
};

describe("this binding", () => {
  const sallyGreeting = personGreeting.bind(sallyObj);
  const chadGreeting = personGreeting.bind(chadObj);
  it("returns a new function with `this` explicitly set", () => {
    expect(chadGreeting()).toEqual("Hey my name is Chadwick");
    expect(sallyGreeting()).toEqual("Hey my name is Sally");
  });
});

describe("personSmallTalk", () => {
  it("calls the function with `this` explicitly set and accepts comma separated arguments", () => {
    expect(personSmallTalk.call(sallyObj, "pizza", "movies")).toEqual(
      `My name is Sally and I am a Principal Engineer and like pizza and movies`
    );

    expect(personSmallTalk.call(chadObj, "chaos", "anarchy")).toEqual(
      `My name is Chadwick and I am a Engineer and like chaos and anarchy`
    );
  });
});

describe("listHobbies", () => {
  it("calls a function with `this` explicitly set and arguments passed as an array", () => {
    expect(
      listHobbies.apply(sallyObj, ["horseback riding", "catching squirrels"])
    ).toEqual(
      "Hey my name is Sally and I like horseback riding and catching squirrels"
    );

    expect(
      listHobbies.apply(chadObj, [
        "walks on the beach",
        "killing ants",
        "eating liver",
      ])
    ).toEqual(
      "Hey my name is Chadwick and I like walks on the beach, killing ants and eating liver"
    );
  });
});

describe("Function.prototype.myBind", () => {
  const funcThatNeedsThis = function (arg1, arg2) {
    return `${this.name} is ${arg1} and ${arg2}`;
  };
  it("returns a new function with `this` explicitly set", () => {
    const chadBrag = funcThatNeedsThis.myBind(chadObj);
    const sallyBrag = funcThatNeedsThis.myBind(sallyObj);

    expect(chadBrag("smart", "cool")).toEqual("Chadwick is smart and cool");
    expect(sallyBrag("smarter", "cooler")).toEqual(
      "Sally is smarter and cooler"
    );
  });
});

describe("Function.prototype.myApply", () => {
  const funcThatNeedsThis = function (arg1, arg2) {
    return `${this.name} likes ${arg1} and ${arg2}`;
  };

  it("calls a function with `this` explicitly set and arguments passed as an array", () => {
    expect(
      funcThatNeedsThis.myApply(sallyObj, [
        "horseback riding",
        "catching squirrels",
      ])
    ).toEqual("Sally likes horseback riding and catching squirrels");

    expect(
      funcThatNeedsThis.myApply(chadObj, ["killing ants", "eating liver"])
    ).toEqual("Chadwick likes killing ants and eating liver");
  });
});
