const { Bank } = require("./BankClass");

describe("BankClass", () => {
  const myBank = new Bank(0);
  it("has a static method to create routing numbers", () => {
    expect(typeof Bank.createRoutingNumber).toBe("function");
  });
  it("asynchronously can deposit funds", async () => {
    await myBank.deposit(10).then((data) => {
      expect(data).toBe(10);
      expect(myBank.getBalance()).toBe(10);
    });
  });
  it("asynchronously can withdraw funds", async () => {
    await myBank.withdraw(5).then((data) => {
      expect(data).toBe(5);
      expect(myBank.getBalance()).toBe(5);
    });
  });
  it("throws an error if you withdraw more than you have", async () => {
    await myBank
      .withdraw(100)
      .catch((e) => expect(e.message).toBe("Insufficient Funds"));
  });
});
