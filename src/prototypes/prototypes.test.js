const { personB, personA, Person } = require('./prototypes');

describe('prototypes', () => {
	it('creates an instance of Person', () => {
		expect(personB.name).toEqual('Randy');
		expect(personB.job).toEqual('Doughnut Maker');
		expect(personA.name).toEqual('Joe');
		expect(personA.job).toEqual('Pizza Guy');
		expect(personB instanceof Person).toEqual(true);

		expect(personA.greeting()).toEqual(
			'My name is Joe and my job is Pizza Guy'
		);
		expect(personB.greeting()).toEqual(
			'My name is Randy and my job is Doughnut Maker'
		);
	});

	it('attaches a custom `myFindMethod` to the Array prototype', () => {
		const arr = [1, 2, 3];

		expect(arr.myCustomFind(1)).toBe(true);
		expect(arr.myCustomFind(10)).toBe(false);
	});
});
