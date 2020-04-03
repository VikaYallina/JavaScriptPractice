function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var a = getRandomInt(60);
if (a >=0 && a<=15){
	document.getElementById("output").innerHTML = "Первая четверть";
}else if (a>15 && a<=30){
	document.getElementById("output").innerHTML = "Вторая четверть";
}else if (a>30 && a<=45){
	document.getElementById("output").innerHTML = "Третья четверть";
}else if (a>45 && a<=60){
	document.getElementById("output").innerHTML = "Четвертая четверть";
}
console.log(a);