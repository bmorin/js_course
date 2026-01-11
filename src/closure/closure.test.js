const { once, addFactory, personWithPrivateProperties } = require("./closure");

describe("once", () => {
  it("returns a function that can only be called once", () => {
    const greetingFunc = (greeting) => {
      return greeting;
    };

    const greetOnce = once(greetingFunc);

    expect(greetOnce("Hey Bro")).toEqual("Hey Bro");
    expect(greetOnce("Hey Bro")).toEqual(undefined);
    expect(greetOnce("Hey Bro")).toEqual(undefined);
    expect(greetOnce("Hey Bro")).toEqual(undefined);
  });

  it("calls the function passed as an argument only once", () => {
    const mockFunc = jest.fn();

    const onceifiedFunction = once(mockFunc);
    const args = ["some", "args", {}];

    onceifiedFunction(...args);
    expect(mockFunc.mock.calls[0]).toEqual(args);
    onceifiedFunction(...args);
    onceifiedFunction(...args);
    onceifiedFunction(...args);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});

describe("addFactory", () => {
  it("returns a function initialized with a number to add", () => {
    const add4 = addFactory(4);

    expect(add4(1)).toEqual(5);
    expect(add4(2)).toEqual(6);
    expect(add4(3)).toEqual(7);
  });
});
describe("personWithPrivateProperties", () => {
  it("does not allow access to the person`s account balance or bankInfo", () => {
    const person = personWithPrivateProperties();
    expect(person.accountBalance).toEqual(undefined);
    expect(person.bankInfo).toEqual(undefined);
    expect(person.age).toEqual(10);
    expect(person.job).toEqual("Pizza Driver");
    expect(person.getAccountBalance()).toEqual(-5);

    person.updateAccountBalance(100);
    person.updateBank({ name: "Chase Bank", sensitiveId: "CB456" });

    expect(person.getAccountBalance()).toEqual(95);
    expect(person.getBankInfo()).toEqual("Chase Bank");
  });
});
