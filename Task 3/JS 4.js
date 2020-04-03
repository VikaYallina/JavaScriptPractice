document.getElementById("CheckBtn").onclick = Out;

function Out(){
	var a = document.getElementById("input").value;
	if (parseInt(a) == 2 || parseInt(a) == 0){
		answer = parseInt(a) + 7;
	}else{
		answer = parseInt(a) / 10;
	}
	document.getElementById("output").innerHTML = answer;
}