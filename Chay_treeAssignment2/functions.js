// loop through the Hamlet object here
//1st one
function linesHamlet() {
	var resultsArray = [];
	for (var i=0;i < hamlet.length;i++) {
		if (hamlet[i].speaker == "HAMLET") {
			resultsArray.push(hamlet[i].text_entry)
		}
	}
	printLeft(resultsArray);
}

//2nd one
function linesOphelia() {
	var resultsArray = [];
	for (var i=0;i < hamlet.length;i++) {
		if (hamlet[i].speaker == "OPHELIA") {
			resultsArray.push(hamlet[i].text_entry)
		}
	}
	printLeft(resultsArray);
}

//3rd one
function Gertrude10lines() {
	var size = 10; 
	for (var i=0;i < hamlet.length;i++) {
		if (hamlet[i].speaker == "QUEEN GERTRUDE") {
			resultsArray.push(hamlet[i].text_entry);
		}
	}
	printLeft(resultsArray.slice(0,size));
}

//4th one find the longest
function longest() {
  printLeft(longest_string(text));
}

let text = []
	for (var i=0;i < hamlet.length;i++) {
		text.push(hamlet[i].text_entry);
	};


function longest_string(str_ara) {
  var max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  let result = str_ara.filter(v => v.length == max);
  return result;
}

//5th shortestWho()

function shortest_string(str_ara) {
  var min = str_ara[0].length;
  str_ara.map(v => min = Math.min(min, v.length));
  let result = str_ara.filter(v => v.length == min);
  return result;
}

function shortestWho(){
	 var resultsArray = []
	 var speech = shortest_string(text);
	 for (var i=0;i < hamlet.length;i++) {
	 if (hamlet[i].text = speech[i]){
     resultsArray.push('Line : ' + hamlet[i].text + ', Speaker: ' + hamlet[i].speaker);
	  }
}
	  printLeft(resultsArray);
}



// start your loops to the HDI table here
//1st one
function Sweden2000() {
	var resultsArray = [];
	// loop through the header (row 0) to get the location of the 2000 column
	var columnNumber = 0;
	for (var i = 0; i < hdiArray[0].length; i++) {
		if (hdiArray[0][i] == 2000) {
			columnNumber = i
		}
	}
	// loop through all the rows looking for Sweden in column 1
	for (var i = 0; i < hdiArray.length; i++) {
		if (hdiArray[i][1] == "Sweden") {
		resultsArray.push(hdiArray[i][columnNumber])
		}
	}
	printRight(resultsArray);
}
//2nd one


function Sweden2010() {
	var resultsArray = [];
	// loop through the header (row 0) to get the location of the 2000 column
	var columnNumber = 0;
	for (var i = 0; i < hdiArray[0].length; i++) {
		if (hdiArray[0][i] == 2010) {
			columnNumber = i
		}
	}
	// loop through all the rows looking for Sweden in column 1
	for (var i = 0; i < hdiArray.length; i++) {
		if (hdiArray[i][1] == "Sweden") {
		resultsArray.push(hdiArray[i][columnNumber])
		}
	}
	printRight(resultsArray);
}

//3rd one S2000and2010()

function S2000and2010() {
 	var resultsArray = [];
	// loop through the header (row 0) to get the location of the 2000 column
	var columnNumber = 0;
	for (var i = 0; i < hdiArray[0].length; i++) {
		if (hdiArray[0][i] == 2010) {
			columnNumber = i
		}
	}
	for (var i = 0; i < hdiArray.length; i++) {
		if (hdiArray[i][1] == "Sweden") {
		resultsArray.push(hdiArray[i][columnNumber])
		}
	}
	for (var j  = 0; j < hdiArray[0].length; j++) {
		if (hdiArray[0][j] == 2000) {
			columnNumber = j
		}
	}
	// loop through all the rows looking for Sweden in column 1
	for (var j = 0; j < hdiArray.length; j++) {
		if (hdiArray[j][1] == "Sweden") {
		resultsArray.push(hdiArray[j][columnNumber])
		}
	}
		printRight(resultsArray[0]-resultsArray[1]);

}


//4th the difference between Finland and Sweden 2010
function Finland(){
 	var resultsArray = [];
	// loop through the header (row 0) to get the location of the 2000 column
	var columnNumber = 0;
	for (var i = 0; i < hdiArray[0].length; i++) {
		if (hdiArray[0][i] == 2010) {
			columnNumber = i
		}
	}
	for (var i = 0; i < hdiArray.length; i++) {
		if (hdiArray[i][1] == "Finland") {
		resultsArray.push(hdiArray[i][columnNumber])
		}
	}
	for (var j  = 0; j < hdiArray[0].length; j++) {
		if (hdiArray[0][j] == 2010) {
			columnNumber = j
		}
	}
	// loop through all the rows looking for Sweden in column 1
	for (var j = 0; j < hdiArray.length; j++) {
		if (hdiArray[j][1] == "Sweden") {
		resultsArray.push(hdiArray[j][columnNumber])
		}
	}
		printRight(resultsArray[0]-resultsArray[1]);
}

//5th Contry with the highest HDI in 2010 

function highestHDI() {
	var resultsArray = [];
	// // loop through the header (row 0) to get the location of the 2000 column
	var columnNumber = 0;
	// for (var i = 0; i < hdiArray[0].length; i++) {
	// 	if (hdiArray[0][i] == 2010) {
	// 		columnNumber = i
	// 	}
	// }
	// console.log(hdiArray[i][columnNumber])
	
	for (var i = 0; i < hdiArray[0].length; i++) {
		if (hdiArray[0][i] == 2010) {
			columnNumber = i
		}
	}

	for (var i = 0; i < hdiArray.length; i++) {
		var max = Math.max(hdiArray[i][columnNumber])
	}
	
	// loop through all the rows looking for Sweden in column 1
	for (var i = 0; i < hdiArray.length; i++) {
		if (hdiArray[i][columnNumber] == max) {
		resultsArray.push(hdiArray[i][1])
		}
	}
	printRight(max);
}


// 	for (var i = 0; i < hdiArray[0].length; i++) {
// 		if (hdiArray[0][i] == 2010) {
// 			columnNumber = i
// 		}
// 	}

// 	for (var i = 0; i < hdiArray.length; i++) {
// 		var max = Math.max(hdiArray[i][columnNumber])
// 	}
	


// console.log(max);


	


// no coding below here!!!!!!!!
// printing functions do not touch
function printLeft(results) {
var thestring = "";
if (results.constructor === Array) {
for (var i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}
document.getElementById("inputResults").innerHTML = thestring; 
}

function printRight(results) {
var thestring = "";
if (results.constructor === Array) {
for (var i=0; i < results.length; i++) {
	thestring += results[i] + "<BR><BR>\n";
}
} else {
thestring = results;
}
document.getElementById("clickResults").innerHTML = thestring; 
}