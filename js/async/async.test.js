const fetchData = require("./async");

it("should return correct todo", async () => {
	const todo = await fetchData(1);
	expect(todo.id).toBe(1);
});

it("should return todo obj", async () => {
	const obj = await fetchData(1);
	expect(obj).toBe(obj);
});
