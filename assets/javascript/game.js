$(document).ready(function() {

	function RandomNum (x,y){
		return Math.floor(Math.random()*(y-x+1)) + x;
	};


	var matchNum = 0;
	var winNum = 0;
	var lossNum = 0;
	var currentNum = 0;


	// var x = "Match this Number: " + matchNum
	$(".match-number").html("Match this Number: " + matchNum);
	$("#wins").html("Wins: " + winNum);
	$("#losses").html("Losses: " + lossNum);
	$("#current-score").html(currentNum);
	
	console.log("Match" +matchNum);

//funtion to assign random value to each crystals and generate random number
	function reset (){
		
		matchNum = RandomNum (19,120);
		currentNum = 0;
		$("#current-score").html(currentNum);
		//assign go trough each crystal and give number to class "value"
		for(i=1;i<=4;i++){

			var count = "#crystal" + i ;
			var placeholder = RandomNum(1,12);
			//console.log("placeholder 1:" + placeholder);
			$(count).attr("value",placeholder);
			// console.log("crystl#1 " + $("#crystal1").attr("value"));
			console.log("value"+i + ": "+ $(count).attr("value"));
		}
		console.log("match#: " + matchNum);
		$(".match-number").html("Match this Number: " + matchNum);


	}

	reset ();


	// if (currentNum < RandomNum){

		$(".crystals").on("click",function(){

			var placeholder = $(this).attr("value");
			// console.log($("#crystal1"));
			//console.log("placeholder 2: " + placeholder);
			currentNum += parseInt(placeholder);
			// console.log("placeholder 2:" + placeholder);
			//console.log("current#: " + currentNum);
			$("#current-score").html(currentNum);
		
		if (currentNum === matchNum){
			winNum++;
			console.log("win#" + winNum);
			$("#wins").html("Wins: " + winNum);
			reset();
		}

		else if (currentNum > matchNum){
			lossNum++;
			console.log("loss#: " + lossNum);
			$("#losses").html("Losses: " + lossNum);
			reset();
		}

		});
	// }


});


