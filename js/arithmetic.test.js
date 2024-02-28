const { add, subtract, multiply, divide } = require("./arithmetic");

// *** add
it("should add two numbers", () => {
	const result = add(10, 5);
	expect(result).toBe(15);
});

// *** subtract
it("should subtract two numbers", () => {
	const result = subtract(10, 5);
	expect(result).toBe(5);
});

// *** multiply
it("should multiply two numbers", () => {
	const result = multiply(10, 5);
	expect(result).toBe(50);
});

// *** divide
it("should divide two numbers", () => {
	const result = divide(10, 5);
	expect(result).toBe(2);
});
