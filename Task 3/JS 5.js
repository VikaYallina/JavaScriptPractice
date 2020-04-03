var max = 4; min = 1;
var a = Math.floor(Math.random() * (max - min + 1)) + min;

switch (a){
	case 1:
		answer = "Зима";
		break;
	case 2:
		answer = "Весна";
		break;
	case 3:
		answer = "Лето";
		break;
	case 4:
		answer = "Осень";
		break;
}
document.getElementById("output").innerHTML = answer;
console.log(a);