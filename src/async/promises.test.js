const {
  getData,
  getDataPromiseChain,
  handleMultiplePromises,
  fakeApiCall,
  myPromiseAll,
} = require("./promises");

describe("getDataPromiseChain", () => {
  it("returns an object with name, age and job", () => {
    getDataPromiseChain().then((res) => {
      expect(res).toStrictEqual({
        name: "Heather",
        job: "code monkey",
        age: 420,
      });
    });
  });
});

describe("getData", () => {
  it("returns an object with name, age and job", async () => {
    const data = await getData();
    expect(data).toStrictEqual({
      name: "Heather",
      job: "code monkey",
      age: 420,
    });
  });
});

describe("handleMultiplePromises", () => {
  it("returns an array of objects returned from a set of promises", async () => {
    const [promise1, promise2, promise3] = [
      fakeApiCall({ name: "Jill" }),
      fakeApiCall({ name: "Jack" }),
      fakeApiCall({ name: "John" }),
    ];

    expect(
      await handleMultiplePromises([promise1, promise2, promise3])
    ).toStrictEqual([
      { data: { name: "Jill" } },
      { data: { name: "Jack" } },
      { data: { name: "John" } },
    ]);
  });
});

describe("implements promise all", () => {
  it("returns an array of responses returned from a set of promises", async () => {
    const apiCall1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "1" });
      }, 500);
    });

    const apiCall2 = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "2" });
      }, 200);
    });

    const apiCall3 = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "3" });
      }, 100);
    });

    expect(await myPromiseAll([apiCall1, apiCall2, apiCall3])).toEqual([
      { message: "1" },
      { message: "2" },
      { message: "3" },
    ]);
  });

  it("rejects if 1 promise fails", async () => {
    const apiCall1 = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "1" });
      }, 500);
    });

    const apiCall2 = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ message: "2" });
      }, 200);
    });

    const apiCall3 = new Promise((res, reject) => {
      setTimeout(() => {
        reject(new Error("BOOM"));
      }, 100);
    });

    try {
      myPromiseAll([apiCall1, apiCall2, apiCall3]);
    } catch (e) {
      expect(e).toEqual(new Error("BOOM"));
    }
  });
});
