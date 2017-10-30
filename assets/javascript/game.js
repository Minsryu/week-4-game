$(document).ready(function() {

	function RandomNum (x,y){
		return Math.floor(Math.random()*(y-x+1)) + x;
	};


	var matchNum = 0;
	var winNum = 0;
	var lossNum = 0;
	var currentNum = 0;


//funtion to assign random value to each crystals and generate random number
	function reset (){
		matchNum = RandomNum (19,120);
		
		//assign go trough each crystal and give number to class "value"
		for(i=1;i<=4;i++){

			var count = "#crystal" + i ;
			var placeholder = RandomNum(1,12);
			//console.log("placeholder 1:" + placeholder);
			$(count).attr("value",placeholder);
			// console.log("crystl#1 " + $("#crystal1").attr("value"));
			console.log("value"+i + ": "+ $(count).attr("value"));
		}
		console.log(matchNum);

	}
	$(".crystals").on("click",function(){

		var placeholder = $(this).attr("value");
		// console.log($("#crystal1"));
		console.log("placeholder 2: " + placeholder);
		currentNum += parseInt(placeholder);
		// console.log("placeholder 2:" + placeholder);

		console.log(currentNum);

	});



reset ();

});