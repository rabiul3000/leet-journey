const validBrackets = (string) => {
	while (
		string.includes('()') ||
		string.includes('[]') ||
		string.includes('{}')
	) {
		string = string.replace('()', '').replace('[]', '').replace('{}', '');
	}

	if (string === '') {
		return true;
	} else {
		return false;
	}
};


console.log(validBrackets('()'));
console.log(validBrackets('()[]{}'));
console.log(validBrackets('(]'));
console.log(validBrackets('([)]'));
console.log(validBrackets('{[]}'));
