//1st function find matching word from the input
function findWord() {
let entry = document.getElementById("yourAnswer").value;
let regex = new RegExp("\\b" + entry+"\\b","i");
let resultsArray = [];
for (let i = 0; i < alltexts.length; i++) {
	let mytext = alltexts[i];
	// let lineArray = mytext.split("\n");
	let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
	for (let j=0; j < sentenceArray.length;j++) {
		if (regex.test(sentenceArray[j]) == true) {
			resultsArray.push(sentenceArray[j]);
		}
}
}
printLeft(resultsArray);
}



////2nd Find counts 

function countThisWord() {
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry+"\\b","i");
	let resultsArray = [];
		for (let i = 0; i < alltexts.length; i++) {
			let mytext = alltexts[i];
			// let lineArray = mytext.split("\n");
			let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
				for (let j=0; j < sentenceArray.length;j++) {
					if (regex.test(sentenceArray[j]) == true) {
						resultsArray.push(sentenceArray[j]);
					}
		}
	}
	printLeft(resultsArray.length);
}
/////// 3rd Check if there's any word 'Y/N  response'

function allTextWords() {
	
	let checkword
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry+"\\b","i");
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		// let lineArray = mytext.split("\n");
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
			for (let j=0; j < sentenceArray.length;j++) {
				if (alltexts[i].includes(entry)){
						checkword =  "Yes"
					}else{
		                checkword = "No"
					}
					// resultsArray.push(sentenceArray[j]);
		}
	}
	printLeft(checkword);
}

/// 4th show how many lines contains this word in each text 
//** expected result would be text 1 : 'number', text 2 : 'number'...

function wordCountPerText(){
	
	let wordcount
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry+"\\b","i");
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		
		resultsArray.push(
			sentenceArray.filter(sentence => sentence.includes(entry) === true)
				.length
		)

	}
	
	printLeft(resultsArray.map((num, i) => `Text ${i + 1} contains '${entry}' ${num} times!`))
}
// printLeft(wordcount);


// 5th count most occurences

function mostPerText(){
	
	let wordcount
	let entry = document.getElementById("yourAnswer").value;
	let regex = new RegExp("\\b" + entry+"\\b","i");
	let amount = 0;
	let text = ''
	for (let i = 0; i < alltexts.length; i++) {
		var currentAmount = alltexts[i].split(entry).length - 1
		
		if (currentAmount > amount) {
			amount = currentAmount
			text = alltexts[i]
		}
	}
	printLeft(text)
}

//6th find more than one words containingMultipleWords() 
function containingMultipleWords() {
	let entry = document.getElementById("yourAnswer").value;
	let words = entry.split(" ")
	let resultsArray =[]
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		for (let j=0; j < sentenceArray.length;j++) {
			if (words.every(function(word) {
				return sentenceArray[j].split(' ').includes(word)
			})) {
				resultsArray.push(sentenceArray[j])
			} else {
				console.log(sentenceArray[j], 'doesnt have', words)
			}

		}
	}
	
	printLeft(resultsArray);
}
// 




// matching words fuction incase we need this

function matchWords(subject, words) {
    var regexMetachars = /[(){[*+?.\\^$|]/g;

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].replace(regexMetachars, "\\$&");
    }

    var regex = new RegExp("\\b(?:" + words.join("|") + ")\\b", "gi");

    return subject.match(regex) || [];
}




///// *** THE RIGHT SIDE***

//Show all first word  
function firstWord() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		// let lineArray = mytext.split("\n");
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		for (let j=0; j < sentenceArray.length;j++) {
			let wordsArray = sentenceArray[j].split(" ");
			resultsArray.push(wordsArray[0]);
		}
	}
	printRight(resultsArray);
}

//Show all last word 

function lastWord() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		// let lineArray = mytext.split("\n");
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		for (let j=0; j < sentenceArray.length;j++) {
			let wordsArray = sentenceArray[j].split(" ");
			resultsArray.push(wordsArray[wordsArray.length - 1]);
		}
	}
	printRight(resultsArray);
}

//Get random item in the array 

function getRandomLine() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		// let lineArray = mytext.split("\n");
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		const randomIndex = Math.floor(Math.random() * sentenceArray.length);
	    // get random item
		resultsArray.push(sentenceArray[randomIndex]);
	}
	return resultsArray
}

function randomLine() {
	printRight(getRandomLine());
}

/// Reverse random sentences randomReverse()

function randomReverse() {
	printRight(getRandomLine().map((sentence) => sentence.split(' ').reverse().join(' ')))
}


/// find the longest string in an array 

function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  let result = str_ara.filter(v => v.length == max);
  return result;
}

// get random sentences from each text and show the longest string
function randomLongWord() {
   var randomlines = getRandomLine()
   var result = []
	for (let i = 0; i < randomlines.length; i++) {
		result.push(longest_string(randomlines[i].split(' ')))
	}
  	printRight(result)
}

//find longest sentence
function longest_sentence(str_ara) {
  var max = str_ara.length;
  str_ara.map(v => max = Math.max(max, v.length));
  let result = str_ara.filter(v => v.length == max);
  return result;
}

function longestText(){
	  	printRight(longest_sentence(alltexts));
}

//find average amount of characters averageLineLength()  
function averageAmount(str_ara) {
		  // Sum up all the quotes lengths
		const totalLength = str_ara.reduce(function (sum, str_ara) {
		    return sum + str_ara.length;
		}, 0);
		
		// Calculate avg length of the quotes
		const avgLength = (
		    totalLength / str_ara.length
		);
		  return avgLength;
}


function averageLineLength() {
	  	printRight(averageAmount(alltexts));
}

//find all the 1st words 'end' with an 'e'
//Show all first word  


function wordsEndingWithE() {
	let resultsArray = [];
	for (let i = 0; i < alltexts.length; i++) {
		let mytext = alltexts[i];
		// let lineArray = mytext.split("\n");
		let sentenceArray = mytext.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|"); // erase this line if you are splitting by line-breaks
		for (let j=0; j < sentenceArray.length;j++) {
			let wordsArray = sentenceArray[j].split(" ");
			const last = wordsArray[0].charAt(wordsArray[0].length - 1);
			// console.log(last)
			if (last === 'e'){
				 resultsArray.push(wordsArray[0])
			}
		}
	}
	printRight(resultsArray);
}




//---------------------------------------
// DO NOT EDIT ANYTHING BELOW THIS LINE!
// THESE JUST PRINT OUT THE RESULTS!!

function printLeft(results) {
let thestring = "";
if (results.constructor === Array) {
for (let i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}
document.getElementById("inputResults").innerHTML = thestring; 
}

function printRight(results) {
let thestring = "";
if (results.constructor === Array) {
for (let i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}

document.getElementById("clickResults").innerHTML = thestring; 
}

document.ready(function() {
    var regex = /\?ÕÌ_|_Œ‚|[ŠŽÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÑÒÓÔÕÖØÙÚÛÜÝÞßðÿ_]+/gi;

    $('.rte').html(function(i, oldHTML) {
        return oldHTML.replace(regex, ' ')
            .replace(/[^\x00-\x7F]|\?/g, '');
    });
});