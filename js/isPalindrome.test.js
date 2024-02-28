const { isPalindrome, reverseString } = require("./isPalindrome");

test("racecar returns true", () => {
	expect(isPalindrome("racecar")).toBe(true);
});

test("Javascript returns false", () => {
	expect(isPalindrome("Javascript")).toBe(false);
});
