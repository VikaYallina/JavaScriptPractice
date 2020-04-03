document.getElementById("CheckBtn").onclick = CheckAnswer;

function CheckAnswer(){
	var str = document.getElementById("input").value;
	chr = str.charAt(0);
	if (chr == "1" || chr == "2" || chr == "3"){
		answer = "да";
	} else{
		answer = "нет";
	}
	document.getElementById("output").innerHTML = answer;
}