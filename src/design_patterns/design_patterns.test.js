const { PubSub, Singleton } = require("./design_patterns");

describe("design patterns", () => {
  describe("observer", () => {
    it("should publish and subscribe to events", () => {
      const pubsub = new PubSub();
      const callback = jest.fn();
      pubsub.subscribe("event", callback);
      pubsub.publish("event", "data");
      expect(callback).toHaveBeenCalledWith("data");
    });
    it("should not call the callback if the event does not match", () => {
      const pubsub = new PubSub();
      const callback = jest.fn();
      pubsub.subscribe("event", callback);
      pubsub.publish("event2", "data");
      expect(callback).not.toHaveBeenCalled();
    });
    it("should handle multiple events and multiple callbacks for each event", () => {
      const pubsub = new PubSub();
      const callback = jest.fn();
      const callback2 = jest.fn();
      pubsub.subscribe("event", callback);
      pubsub.subscribe("event", callback2);
      pubsub.subscribe("event2", callback);
      pubsub.publish("event", "data");
      expect(callback).toHaveBeenCalledWith("data");
      expect(callback2).toHaveBeenCalledWith("data");
    });
  });
  describe("singleton", () => {
    it("should throw an error if another instance is created", () => {
      expect.assertions(1);
      try {
        new Singleton();
        new Singleton();
      } catch (e) {
        expect(e.message).toBe("Cannot create another instance");
      }
    });
  });
});
