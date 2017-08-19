$(document).ready(function() {
	var characters = {
		Earth: {
			name: "Earth",
			startAtk: 15,
			startHealth: 100,
			counterAtk: 14,
			image: "assets/images/someFile.png",
			bgColor: "green",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Mars: {
			name: "Mars",
			startAtk: 10,
			startHealth: 120,
			counterAtk: 12,
			image: "assets/images/someFile.png",
			bgColor: "blue",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Pluto: {
			name: "Pluto",
			startAtk: 18,
			startHealth: 80,
			counterAtk: 18,
			image: "assets/images/someFile.png",
			bgColor: "grey",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Saturn: {
			name: "Saturn",
			startAtk: 6,
			startHealth: 140,
			counterAtk: 8,
			image: "assets/images/someFile.png",
			bgColor: "purple",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Earth2: {
			name: "Earth",
			startAtk: 15,
			startHealth: 100,
			counterAtk: 14,
			image: "assets/images/someFile.png",
			bgColor: "green",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Mars2: {
			name: "Mars",
			startAtk: 10,
			startHealth: 120,
			counterAtk: 12,
			image: "assets/images/someFile.png",
			bgColor: "blue",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Pluto2: {
			name: "Pluto",
			startAtk: 18,
			startHealth: 80,
			counterAtk: 18,
			image: "assets/images/someFile.png",
			bgColor: "grey",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		},
		Saturn2: {
			name: "Saturn",
			startAtk: 6,
			startHealth: 140,
			counterAtk: 8,
			image: "assets/images/someFile.png",
			bgColor: "purple",
			alive: true,
			mainChar: false,
			enemy: false,
			player: false
		}
	};
	var charSize = 0;


	for(var key in characters){
			if(characters.hasOwnProperty(key)) charSize++;
		};
	//Can have as many characters as you'd like and the game will still play
	var valueForColSize = Math.floor(12/charSize);
	if(valueForColSize < 1){
		valueForColSize = 1;
	}
var gameSetup = {

	// populateCharacterName: function(value){
	// 	var characterNameSpan = $("<span/>");
	// 	characterNameSpan.addClass("col-xs-12 character-name");
	// 	characterNameSpan.text(value);
	// 	$(".character-name").append(characterNameSpan);
	// 	console.log("In the new function");
	// 	callback();
	// },
	populateCharacterDivs: function(){
		var makeName = true;
	for (var characterVal in characters) {
		// console.log(characters[characterVal].startAtk);
		// console.log("The value for colSize: " + valueForColSize + ": " + charSize);
		// var characterDiv = $("<div/>");
		// characterDiv.addClass("col-xs-" + valueForColSize + " character-name");
		// // console.log(characterDiv);
		// characterDiv.attr("character-name", characters[characterVal].name);
		// characterDiv.css("background-color", characters[characterVal].bgColor);
		// characterDiv.css("background-image", characters[characterVal].image);
		// characterDiv.text(characters[characterVal].startHealth);
		// $("#choose-character").append(characterDiv);

		var newHTMLDiv = $("<characters/>");
		// newHTMLDiv.attr({alive:"true",player:"false"}); this is not needed since the values are stored in game
		newHTMLDiv.html("<div class=\"col-xs-"+valueForColSize+" character-name "+characters[characterVal].name+"\""+"character-name=\""+characters[characterVal].name+"\">"+characters[characterVal].name+"</div>");
		$("#choose-character").append(newHTMLDiv);
	
		console.log(characterVal.length);
		// gameSetup.populateCharacterName(characters[characterVal].name); <-- doesn't work cause it stop the forloop
		// if(makeName){
		// 	var characterNameSpan = $("<span/>");
		// 	characterNameSpan.addClass("col-xs-12 character-name");
		// 	characterNameSpan.text(characters[characterVal].name);
		// 	$(".character-name").append(characterNameSpan);
		// 	console.log("In the new function");
		// 	console.log(characters[characterVal].name[0]);
		// }
	};}
};

function startGame(){
	gameSetup.populateCharacterDivs(); //Goes through all the character names and sets the div, bgcolor and image. 
	var appImage = $("<div/>");
	appImage.text("The Image Goes HERE!");
	$(".Earth").append(appImage);
	var appImage = $("<div/>");
	appImage.text(characters.Earth.startHealth);
	$(".Earth").append(appImage);
};
startGame();
	//Once a Character has been selected set enemy: true for the rest of the characters
	//Set mainChar: true for the character being used for attacks to use as a gate to get into position
	// and load the stats to start fighting
});