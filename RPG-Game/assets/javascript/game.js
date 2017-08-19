/*

	Make character names, starting attack dmg, health, counter-attack damage, etc..

*/
// var Earth = ["Earth", 15, 100, 14];
// var Mars = ["Mars", 10, 120, 12];
// var Pluto = ["Pluto", 18, 80, 18];
// var Saturn = ["Saturn", 6, 140, 8];

var characters = {
	Earth: {
		name: "Earth",
		startAtk: 15,
		startHealth: 100,
		counterAtk: 14
	},
	Mars: {
		name: "Mars",
		startAtk: 10,
		startHealth: 120,
		counterAtk: 12
	},
	Pluto: {
		name: "Pluto",
		startAtk: 18,
		startHealth: 80,
		counterAtk: 18
	},
	Saturn: {
		name: "Saturn",
		startAtk: 6,
		startHealth: 140,
		counterAtk: 8
	},
	Earth2: {
		name: "Earth",
		startAtk: 15,
		startHealth: 100,
		counterAtk: 14
	},
	Mars2: {
		name: "Mars",
		startAtk: 10,
		startHealth: 120,
		counterAtk: 12
	},
	Pluto2: {
		name: "Pluto",
		startAtk: 18,
		startHealth: 80,
		counterAtk: 18
	},
	Saturn2: {
		name: "Saturn",
		startAtk: 6,
		startHealth: 140,
		counterAtk: 8
	},
	Earth3: {
		name: "Earth",
		startAtk: 15,
		startHealth: 100,
		counterAtk: 14
	},
	Mars3: {
		name: "Mars",
		startAtk: 10,
		startHealth: 120,
		counterAtk: 12
	},
	Pluto3: {
		name: "Pluto",
		startAtk: 18,
		startHealth: 80,
		counterAtk: 18
	},
	Saturn3: {
		name: "Saturn",
		startAtk: 6,
		startHealth: 140,
		counterAtk: 8
	}
};

// var characters = {
// 	//This is smaller than above code and is [name, startAtk, startHealth, counterAtk]
// 	Earth: ["Earth", 15, 100, 14],
// 	Mars: ["Mars", 10, 120, 12],
// 	Pluto: ["Pluto", 18, 80, 18],
// 	Saturn: ["Saturn", 6, 140, 8]
// };
//Access the Characters above by "characters.Earth.name", etc..


/*
	characters[characterVal].name
	characters[characterVal].startAtk
	characters[characterVal].startHealth
	characters[characterVal].counterAtk
*/
// var displaySet = {
// 	var characterDiv = $("<div>");
// 	characterDiv.addClass("col-xs-" + valueForColSize);
// 	characterDiv.attr("character-name", characters[characterVal]);
// 	characterDiv.css('background-image', 'url('+ characters[characterVal].image')');
// 	$("#choose-character").append(characterDiv);
// };

var gameSetup = { //remember to wrap the code after it's been written
};
	// console.log("The thing is below: " + characters);
	// console.log(characters.Earth.name);
	// console.log(characters.Earth.startAtk);
	var charSize = 0;

	//Can have up to 12 characters and the col-xs- will be set automatically to the appropriate size 
	
	for(var key in characters){
		if(characters.hasOwnProperty(key)) charSize++;
	};
	var valueForColSize = Math.floor(12/charSize);
	//End auto sizing calculations

	for (var characterVal in characters) {
		// console.log(characters[characterVal].startAtk);
		console.log("The value for colSize: " + valueForColSize + ": " + charSize);
		var characterDiv = $("<div/>");
		characterDiv.addClass("col-xs-" + valueForColSize);
		console.log(characterDiv);
		characterDiv.attr("character-name", characters[characterVal].name);
		characterDiv.css("background-image", "url("+ characters[characterVal].image +")");
		characterDiv.text("fuck");
		$("#choose-character").append(characterDiv);
		console.log(characterDiv);

	};