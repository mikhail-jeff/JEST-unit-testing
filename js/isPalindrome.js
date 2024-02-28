function reverseString(word) {
	return word.split("").reverse().join("").replaceAll(",", "");
}

function isPalindrome(word) {
	return word.toLowerCase() === reverseString(word).toLowerCase();
}

module.exports = {
	isPalindrome,
	reverseString,
};
