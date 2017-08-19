var randomNumber = wins = losses = randomCrystalValue = currentScore = 0;
var crystalArr = ["#first-crystal", "#second-crystal", "#third-crystal", "#fourth-crystal"];

/* On load make random number (19-120) and populate crystals with random numbers (1-12)
	restart on gameWin or gameLoss

*/

function randomPoints(){
	do{
		randomNumber = Math.floor(Math.random()*120);
		if(randomNumber >= 19){
			if(randomNumber <= 120){
				$("#random-number").html(randomNumber);
				return true;
			}
			return false;
		}
		return false;
	}while(!randomPoints());
}

function randomCrystalVal(){

	for(var i = 0; i < crystalArr.length; i++){
		randomCrystalValue = Math.floor(Math.random()*12);
			if(randomCrystalValue >= 1){
				if(randomCrystalValue <= 12){
					$(crystalArr[i]).attr("value", randomCrystalValue);
				}else{
					i--;
				}
			}else{
				i--;
			}
		}

	// var i = 0;
	// do{
	// 	randomCrystalValue = Math.floor(Math.random()*12);
	// 	if(randomCrystalValue >= 1){
	// 		if(randomCrystalValue <= 12){
	// 			$(crystalArr[i]).attr("value", randomCrystalValue);
	// 			i++;
	// 			if(i >= 4){
	// 				return true;
	// 			};
	// 		}
	// 		return false;
	// 	}
	// 	return false;
	// }while(!randomCrystalVal());
}

function reset(){
	randomNumber = randomCrystalValue = currentScore = 0;
	$("#current-value").html("N/A");
	randomPoints();
	randomCrystalVal();
}

function youWon(){
	wins++;
	$("#wins").html(wins);
	reset();
}

function youLost(){
	losses++;
	$("#losses").html(losses);
	reset();
}

function updateCurrentScore(x){
	currentScore += parseInt(x);
	$("#current-value").html(currentScore);
	if(currentScore === randomNumber){
		youWon();
	}else if(currentScore > randomNumber){
		youLost();
	}
}

$(document).ready(function() {
	reset();
	$(".crystal").on("click", function(){
		// console.log(this.value); //this doesn't work because the "values" are created within the dom
		updateCurrentScore($(this).attr("value"));
	})
});