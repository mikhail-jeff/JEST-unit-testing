const { cloneArray, cloneObject } = require("./shallowClone");

test("creates a clone of an array", () => {
	const array = [1, 2, 3, 4, 5];

	expect(cloneArray(array)).toStrictEqual(array);
});

test("creates a clone of an object", () => {
	const obj = {
		name: "John Smith",
		age: 11,
		location: "Japan",
	};

	expect(cloneObject(obj)).toStrictEqual(obj);
});
