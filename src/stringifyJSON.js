// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(coll) {
if (typeof coll === "string") {
	 	return '"' + coll + '"';
	 } else if (typeof coll === "number" || typeof coll === "boolean") {
	 	return "" + coll + "";
	 } else if (coll === null) {
	 	return 'null';
	 } else if (Array.isArray(coll)) {
	 	var newArr = [];

	 	if (coll.length === 0) {
	 		return '[' + coll + ']';
	 	}

	 	for(var index in coll) {
	 		coll[index] = stringifyJSON(coll[index]);
	 		newArr.push(coll[index]);
	 	}

	 	return '[' + newArr + ']' ;
	 } else {
	 	var newObj = "";
	 	var keys = Object.keys(coll);

	 	if (keys.length === 0) {
	 		return '{}';
	 	}

	 	for (var key in coll) {
	 		if (typeof coll[key] !== 'function' && coll[key] !== undefined) {
	 		var newKey = stringifyJSON(key);
	 		newObj = newObj + newKey + ":" + stringifyJSON(coll[key]) + ",";
	 		}
	 		
	 	}
	 	var final = newObj.slice(0,newObj.length - 1);
	 	return '{' + final + '}';
	 }
};

