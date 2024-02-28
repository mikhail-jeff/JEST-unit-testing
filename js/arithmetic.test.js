const { add, subtract, multiply, divide } = require("./arithmetic");

// *** add
test("properly add two numbers", () => {
	expect(add(10, 5)).toBe(15);
});

// *** subtract
test("properly subtract two numbers", () => {
	expect(subtract(10, 5)).toBe(5);
});

// *** multiply
test("properly multiply two numbers", () => {
	expect(multiply(10, 5)).toBe(50);
});

// *** divide
test("properly divide two numbers", () => {
	expect(divide(10, 5)).toBe(2);
});
