var ElemArr = [
	"ru",
	"en"
];
var lang = ElemArr[Math.floor(Math.random()*ElemArr.length)];
switch(lang){
	case "ru":
		console.log([
			"Понедельник",
			"Вторник",
			"Среда",
			"Четверг",
			"Пятница",
			"Суббота",
			"Воскресенье"
		]);
		break;
	case "en":
		console.log([
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
			"Sunday"
		]);
		break;
}
