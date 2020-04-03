
document.getElementById("addBtn").onclick = displayAdd;
function displayAdd()
{
	var a =document.getElementById("in1").value;
	var b =document.getElementById("in2").value;
	document.getElementById("label").innerHTML = parseInt(a) + parseInt(b);
}

document.getElementById("subtractBtn").onclick = displaySubtract;
document.getElementById("multiplyBtn").onclick = displayMultiply;
document.getElementById("divideBtn").onclick = displayDivide;

function displaySubtract()
{
	var a =document.getElementById("in1").value;
	var b =document.getElementById("in2").value;
	document.getElementById("label").innerHTML = parseInt(a) - parseInt(b);
}

function displayMultiply()
{
	var a =document.getElementById("in1").value;
	var b =document.getElementById("in2").value;
	document.getElementById("label").innerHTML = parseInt(a) * parseInt(b);
}

function displayDivide()
{
	var a =document.getElementById("in1").value;
	var b =document.getElementById("in2").value;
	document.getElementById("label").innerHTML = parseInt(a) / parseInt(b);
}


	