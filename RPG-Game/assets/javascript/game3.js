$(document).ready(function() {
	var playerSelected = false;
	var enemySelected = false;
	var firstFight = true;
	var playerHealth = 0;
	var playerAttack = 0;
	var enemiesKilled = 0;
	var enemyJustDied = true;
	var characters = {
		Earth: {
			name: "Earth",
			startAtk: 15,
			startHealth: 100,
			counterAtk: 14,
			image: "assets/images/earth-128.png",
			bgColor: "green",
			alive: true,
			isEnemy: false,
			isPlayer: false
		},
		Mars: {
			name: "Mars",
			startAtk: 10,
			startHealth: 120,
			counterAtk: 12,
			image: "assets/images/mars-128.png",
			bgColor: "blue",
			alive: true,
			isEnemy: false,
			isPlayer: false
		},
		Pluto: {
			name: "Pluto",
			startAtk: 18,
			startHealth: 80,
			counterAtk: 18,
			image: "assets/images/pluto-128.png",
			bgColor: "grey",
			alive: true,
			isEnemy: false,
			isPlayer: false
		},
		Saturn: {
			name: "Saturn",
			startAtk: 6,
			startHealth: 140,
			counterAtk: 8,
			image: "assets/images/saturn-128.png",
			bgColor: "purple",
			alive: true,
			isEnemy: false,
			isPlayer: false
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
	imageEarth: "<img src="+characters.Earth.image+" class=\"img-fluid\">",
	imageMars: "<img src="+characters.Mars.image+" class=\"img-fluid\">",
	imagePluto: "<img src="+characters.Pluto.image+" class=\"img-fluid\">",
	imageSaturn: "<img src="+characters.Saturn.image+" class=\"img-fluid\">",
	

	startAttacking: function(){
		//set all character values to local in function variables, so that the character values are never over written
			playerHealth = $("#player > .character-health").text();
			var playerName = $("#player > .character-name").text();
			var playerAttackOriginal = characters[playerName].startAtk;
		if(firstFight){
			playerAttack = playerAttackOriginal;
		}
			playerAttack = playerAttack;
			console.log("Player Attack = Player Attack: " + playerAttack);
		var enemyHealth = $(".enemies > .character-health").text();
		var enemyName = $(".enemies > .character-name").text();
		var enemyAttack = characters[enemyName].counterAtk;

		$("#attack-container").on("click", function(){
			//set all veriables locally within function
			console.log("Player health is: " + playerHealth);
			console.log("Enemy health is: " + enemyHealth);
			console.log("Player starting attack: " + playerAttack);
			//if player dies, alert of death
			//if enemy dies, set enemySelected = false and call gameSetup.playerSelect()
			if(playerHealth > 0 && enemyHealth > 0 && playerSelected){
				enemyHealth -= playerAttack;
				if(enemyHealth > playerAttack){
					playerHealth -= enemyAttack;
				}
				$("#player > .character-health").text(playerHealth);
				$(".enemies > .character-health").text(enemyHealth);
				playerAttack = playerAttackOriginal + playerAttack;
				console.log(playerAttack);
			}else if(enemyHealth <= 0 && enemyJustDied){
				console.log("Enemy health below 0!");
				$("#enemy-selected").hide();
				$("#select-new-enemy").show();
				enemySelected = false;
				gameSetup.playerSelect();
				enemyJustDied = false;
				enemiesKilled++;
				if(enemiesKilled === 3){
					$("#select-new-enemy").hide();
					$("#winner").show();
				}
			}else if(playerHealth <= 0){
				$("#select-new-enemy").hide();
				$("#lost").show();
			}
		});
	},
	populateCharacterDivs: function(){
		$("#Earth > .character-name").text(characters.Earth.name);
		//$('myOjbect').css('background-image', 'url(' + imageUrl + ')');
		$("#Earth > .character-image").html(gameSetup.imageEarth);
		$("#Earth > .character-health").text(characters.Earth.startHealth);
		$("#Mars > .character-name").text(characters.Mars.name);
		$("#Mars > .character-image").html(gameSetup.imageMars);
		$("#Mars > .character-health").text(characters.Mars.startHealth);
		$("#Pluto > .character-name").text(characters.Pluto.name);
		$("#Pluto > .character-image").html(gameSetup.imagePluto);
		$("#Pluto > .character-health").text(characters.Pluto.startHealth);
		$("#Saturn > .character-name").text(characters.Saturn.name);
		$("#Saturn > .character-image").html(gameSetup.imageSaturn);
		$("#Saturn > .character-health").text(characters.Saturn.startHealth);
		},
	playerSelect: function(){

		$(".character-div").on("click", function(){
			var chosenChar = $(this).attr("id");
			var chosenCharID = "#"+chosenChar;

			if(!playerSelected){ //waiting for selection
				// console.log("Clicks are working: " + $(this).attr("id"));
				// console.log("The chosenChar is: " + chosenChar);
				// console.log("The image link is: " + characters[chosenChar].image);
				$("#fight-area").show();
				$("#player > .character-name").text($(this).attr("id"));
				$("#player > .character-image").html("<img src="+characters[chosenChar].image+" class=\"img-fluid\">");
				$("#player > .character-health").text(characters[chosenChar].startHealth);
				//$(chosenCharID).hide();
				$(chosenCharID).css("visibility", "hidden");
				$("#select-player").hide();
				$("#select-enemy").show();
				playerSelected = true;
			}else if(!enemySelected){
				// console.log("Inside the Enemey Selector!");
				$("#attack").show();
				$(".enemies > .character-name").text($(this).attr("id"));
				$(".enemies > .character-image").html("<img src="+characters[chosenChar].image+" class=\"img-fluid\">");
				$(".enemies > .character-health").text(characters[chosenChar].startHealth);
				// $(chosenCharID).hide();
				$(chosenCharID).css("visibility", "hidden");
				$("#select-enemy").hide();
				$("#select-new-enemy").hide();
				$("#enemy-selected").show();
				enemySelected = true;
				enemyJustDied = true;
					gameSetup.startAttacking();
					console.log("In first fight!")
					firstFight = false;
				
				console.log("playerSelected: " + playerSelected + " enemySelected: " + enemySelected);
				// if(firstFight){
				// }
			}
		});
	}
};

function startGame(){
	gameSetup.populateCharacterDivs(); //Goes through all the character names and sets the div, bgcolor and image.
	gameSetup.playerSelect();
};
startGame();
	//Once a Character has been selected set enemy: true for the rest of the characters
	//Set mainChar: true for the character being used for attacks to use as a gate to get into position
	// and load the stats to start fighting
});