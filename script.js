/*
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
*/

//. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶 ")

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (dJ, dK) {
	let onlyDogsJulia = dJ.slice(1, -1);
	let JKArray = onlyDogsJulia.concat(dK);
	return JKArray;
};

const JKArray = checkDogs(dogsJulia, dogsKate);
console.log("JKArray: ", JKArray);

JKArray.forEach(function (age, i, arr) {
	if (age >= 3) {
		console.log(`Dog number ${i + 1} is an adult, and is ${age} years old`);
	} else {
		console.log(`Dog number ${i + 1} is still a puppy 🐶`);
	}
});

console.log("dogTypes: ", JKArray);
