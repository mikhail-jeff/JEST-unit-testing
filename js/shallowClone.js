function cloneArray(array) {
	return [...array];
}

function cloneObject(obj) {
	return { ...obj };
}

module.exports = {
	cloneObject,
	cloneArray,
};
