function solve() {
	let resultHTML = document.getElementById("result");
	let input = document.getElementById("text").value; // 75 105 John Adams 110 103 115 Roger 108 97 110 100
	let numbersToLettersArray = [];
	let lettersArray = [];
	let inputArray = input.split(" ");

	for (i = 0; i < inputArray.length; i++) {
		let tempItem = inputArray[i];
		console.log("temp item is ", tempItem);
		if (!Number(tempItem)) {
			lettersArray.push(inputArray[i]);
		} else {
			numbersToLettersArray.push(String.fromCharCode(inputArray[i]));
		}
	}

	for (word of lettersArray) {
		// lettersArray = ['John', 'Adams', 'Roger']
		let tempArr = [];
		for (letter of word) {
			tempArr.push(letter.charCodeAt(letter));
		}
		// After the 2nd inside loop over each letter
		//console.log(tempArr.join(" ")); // join array of nums
		let newP = document.createElement("P"); // create new P tag element
		newP.innerText = tempArr.join(" "); // add text to element
		resultHTML.appendChild(newP); // append new element to span with id="result"
	}
	console.log("make me text", numbersToLettersArray);
	let numNewP = document.createElement("P");
	numNewP.innerText = numbersToLettersArray.join("");
	resultHTML.appendChild(numNewP);
}
