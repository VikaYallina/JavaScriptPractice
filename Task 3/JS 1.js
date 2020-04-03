document.getElementById("CheckBtn").onclick = CheckAnswer;

function CheckAnswer()
{
	var a = document.getElementById("input").value;
	if (parseInt(a) == 10){
		answer = "Верно";
	}else{
		answer = "Неверно";
	}
	document.getElementById("output").innerHTML = answer;
}
