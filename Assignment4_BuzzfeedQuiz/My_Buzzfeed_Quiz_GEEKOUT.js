var counter = 1;
var total = [0,0,0,0,0];
var visibleQ = ["questionOne", "questionTwo", "questionThree", "questionFour", "questionFive","answerBox"];
function getValue(q,points){
	var q=q-1;
	total[q]=points;
	changeVisibility();
}
function changeVisibility(){
	document.getElementById(visibleQ[counter-1]).className="hidden";
	document.getElementById(visibleQ[counter]).className="show";
	counter++
	if (counter==6){
		totalScore();
	}
}
function totalScore(){
	var score = 0;
	for (var i = 0; i<total.length; i++){
		score += total[i]; 
	}
	analyze(score);
}
function analyze(score){
	if (score >= 5 && score <17){
		document.getElementById("result").innerHTML = "Chocolate!";
	}
	else if (score >= 17 && score <32){
		document.getElementById("result").innerHTML  = "Butterfinger!";
	}
	else if (score >= 32 && score <47){
		document.getElementById("result").innerHTML  = "Sour Patch Kids!";
	}
	else if (score >= 47 && score <75){
		document.getElementById("result").innerHTML  = "Hot Tamales!";
	}
}
