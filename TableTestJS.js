var table = document.getElementById("tableID");
fillTableWithEmptyCells();
document.getElementById("buttonID").onclick = fillTableWithData;

function fillTableWithEmptyCells(){
	for (var i = 0; i<table.rows.length; i++){
		table.rows[i].cells[1].innerHTML = " ";
	}
}

function fillTableWithData(){
	table.rows[0].cells[1].innerHTML = "Виктория";
	table.rows[1].cells[1].innerHTML = "Яллина";
	table.rows[2].cells[1].innerHTML = "ИВМИиИТ";
	table.rows[3].cells[1].innerHTML = "Прикладная информатика";
	table.rows[4].cells[1].innerHTML = "09-851";
	table.rows[5].cells[1].innerHTML = "Технологическая практика";
}
subjects = ["Технологическая практика", "Основы графики", "Теория вероятности", "ООА и П"];
console.log(subjects);
var name = "Яллина В.И.", age = 20, uni = "КФУ", institute = "ИВМИиИТ", group = "09-851";
person = {
	"Имя": name,
	"Возраст": age,
	"Университет": uni,
	"Институт": institute,
	"Группа": group
}
console.log(person);