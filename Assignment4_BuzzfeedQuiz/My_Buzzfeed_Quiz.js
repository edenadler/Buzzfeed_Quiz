var answerArray = [0,0,0,0,0];

function saveAnswer(q,points){
	var q = q-1;
	answerArray[q] = points;
}

function answerFive(sel1){
	var selectedValue = parseInt(sel1.value);
	saveAnswer(5,selectedValue);
}

function total(){
	var score = 0;
	for (var i = 0; i<answerArray.length; i++){
		score += answerArray[i]; 
	}
	analyze(score);
}
function analyze(score){
	var show;
	if (score >= 5 && score <17){
		show = "You are chocolate!";
	}
	else if (score >= 17 && score <32){
		show = "You are a Butterfinger!";
	}
	else if (score >= 32 && score <47){
		show = "You are Sour Patch Kids!";
	}
	else if (score >= 47 && score <75){
		show = "You are Hot Tamales!";
	}
	display(show);
}

function display(show){
	var para = document.createElement("p");
	var node = document.createTextNode(show);
	para.appendChild(node);
	var element = document.getElementById("showResult");
	element.appendChild(para);
}
