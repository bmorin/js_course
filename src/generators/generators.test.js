const { generateRandomId, forLoopGenerator } = require('./generators');

describe('forLoopGenerator', () => {
    it('initializes a loop starting at the initial number', () => {
        const looper = forLoopGenerator(10);

        expect(looper.next().value).toEqual(10);
        expect([...looper]).toEqual([9, 8, 7, 6, 5, 4, 3, 2, 1]);

        expect(looper.next()).toEqual({ done: true, value: undefined });
    });
});

describe('generateRandomId', () => {
    it('generates a random id', () => {
        const idGenerator = generateRandomId();
        const idMap = new Set();
        for (let i = 0; i < 100; i++) {
            idMap.add(idGenerator.next().value);
        }
        expect(idMap.size).toEqual(100);
    });
});
