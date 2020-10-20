function solve() {
	let resultHTML = document.getElementById("result");
	let inputText = document.getElementById("text").value; // input text to split
	let inputNumber = document.getElementById("number").value; // num to split by
	let willItSplit = inputText.length % inputNumber;

	if (willItSplit == 0) {
		console.log("It splits evenly");
		let splitEx = new RegExp(`.{1,${inputNumber}}`, "g");

		console.log("custom regex based on input num is ", splitEx);
		let splitArray = inputText.match(splitEx);
		console.log("split array now has one empty item ", splitArray);
		resultHTML.innerText = splitArray.join(" ");

		// Grab last element of array, check to see if its length is long enough, if not,
		// start adding chars from the index[0]++ until it is === num.length
	} else if (inputText.length < inputNumber) {
		console.log("Not even and short");
		let resultText = inputText;
		let i = 0;
		while (resultText.length < inputNumber) {
			resultText += resultText[i];
			i++;
		}
		console.log(resultText);
		resultHTML.innerText = resultText;
	} else {
		console.log("Its long enough, but not even", inputText.length, inputNumber);
		let splitRegex = new RegExp(`.{1,${inputNumber}}`, "g");
		let splitArray = inputText.match(splitRegex);
		console.log("split arr", splitArray);
		let resultText = splitArray[splitArray.length - 1];
		console.log("last element of arr is ", resultText);
		let i = 0;
		while (resultText.length < inputNumber) {
			resultText += inputText[i];
			i++;
		}
		splitArray[splitArray.length - 1] = resultText;
		console.log("new res text", resultText);
		console.log(splitArray);
		resultHTML.innerText = splitArray.join(" ");
	}
}
