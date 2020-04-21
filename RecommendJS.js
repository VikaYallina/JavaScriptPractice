
const ul = document.querySelector('ul');
const getBtn = document.getElementById('getResults');
const delEntryBtn = document.getElementById('deleteResult');
const delAllBtn = document.getElementById('deleteAll');
const indexInput = document.getElementById('indexInput');

//Получение данных из local storage
let itemsArr = localStorage.getItem('entries') ? JSON.parse(localStorage.getItem('entries')) : [];
localStorage.setItem('entries', JSON.stringify(itemsArr));
const data = JSON.parse(localStorage.getItem('entries'));

// Стрелочная функция для добавления новых элементов "li"
const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

//Вывод списка записей из local storage
data.forEach(item => {
  liMaker(item[0]+" "+item[1]);
});

document.getElementById("Res_btn").onclick = getResult;

// Функция, выполняющаяся при нажатии на кнопку "Показать результаты"
function getResult(){
	entryArr = [];
	
	//Имя пользователя
	in1 = "ФИО - "+document.getElementById("In_1").value;
	document.getElementById("Out_1").innerHTML = in1;
	entryArr.push(in1);
	
	//Возраст пользователя
	in2 = "Возраст - "+document.getElementById("In_2").value;
	document.getElementById("Out_2").innerHTML = in2;
	entryArr.push(in2);
	
	//3. Сколько книг вы читаете за месяц?
	var in3 = document.getElementById("In_3").value;
	if (in3>=0 && in3<2){
		out3 = "3. Кол-во книг за месяц - Вам нужно читать больше книг в месяц.";
	}else if (in3>=2 && in3<5){
		out3 = "3. Кол-во книг за месяц - Вы читаете достаточно книг за месяц.";
	} else if (in3>=5){
		out3 = "3. Кол-во книг за месяц - Супер! За месяц вы читаете больше среднего.";
	} else{
		out3 = "3. Кол-во книг за месяц - Некорректно введены данные.";
	}
	document.getElementById("Out_3").innerHTML = out3;
	entryArr.push(out3);
	
	// 4. Читаете ли вы иностранные книги в их оригинале?
	in4 = document.getElementById("In_4").value;
	switch(in4){
		case "да":
			out4 = "4. Иностранные книги - Замечательно! Знание иностранных языков очень полезно.";
			break;
		case "нет":
			out4 = "4. Иностранные книги - Вы можете изучать новые языки в свободное время.";
			break;
		default:
			out4 = "4. Иностранные книги - Некорректно введены данные.";
			break;
	}
	document.getElementById("Out_4").innerHTML = out4;
	entryArr.push(out4);
	
	//5. Какое количество страниц вы читаете за один подход?
	var in5 = document.getElementById("In_5").value;
	if (in5>=0 && in5<50){
		out5 = "5. Кол-во страниц - Вам нужно читать больше страниц.";
	}else if (in5>=50 && in5<125){
		out5 = "5. Кол-во страниц - Вы читаете достаточно старниц.";
	} else if (in5>=125){
		out5 = "5. Кол-во страниц - За один подход вы читаете очень много страниц. Так держать!";
	} else{
		out5 = "5. Кол-во страниц - Некорректно введены данные.";
	}
	document.getElementById("Out_5").innerHTML = out5;
	entryArr.push(out5);
	
	// 6. Сколько часов в неделю вы читаете книги?
	var in6 = document.getElementById("In_6").value;
	if (in6>=0 && in6<2){
		out6 = "6. Время чтения - Вам нужно отводить больше времени на чтение";
	}else if (in6>=2 && in6<6){
		out6 = "6. Время чтения - Вы отводите достаточно времени на чтение.";
	} else if (in6>=6){
		out6 = "6. Время чтения - Вы отводите много времени на чтение. Прекрасно!";
	} else{
		out6 = "6. Время чтения - Некорректно введены данные.";
	}
	document.getElementById("Out_6").innerHTML = out6;
	entryArr.push(out6);
	
	// 7. Читаете ли вы только в целях развлечения?
	in7 = document.getElementById("In_7").value;
	switch(in7){
		case "да":
			out7 = "7. Только для развлечения - Возможно вам стоит прочитать образовательные книги.";
			break;
		case "нет":
			out7 = "7. Только для развлечения - Очень хорошо! Саморазвитие всегда полезно.";
			break;
		default:
			out7 = "7. Только для развлечения - Некорректно введены данные.";
			break;
	}
	document.getElementById("Out_7").innerHTML = out7;
	entryArr.push(out7);
	
	//Добавление нового элемента в массив элементов и записи в список
	itemsArr.push(entryArr);
	localStorage.setItem('entries', JSON.stringify(itemsArr));
    liMaker(entryArr[0]+" "+entryArr[1]);
}

//Вывод на экран данных о запрашиваемом элементе при нажатии на кнопку "показать"
getBtn.addEventListener('click', function(){
	if (indexInput.value>0 && indexInput.value<=itemsArr.length){
		elem = itemsArr[indexInput.value-1];
		document.getElementById('Out_1').innerHTML = elem[0];
		document.getElementById('Out_2').innerHTML = elem[1];
		document.getElementById('Out_3').innerHTML = elem[2];
		document.getElementById('Out_4').innerHTML = elem[3];
		document.getElementById('Out_5').innerHTML = elem[4];
		document.getElementById('Out_6').innerHTML = elem[5];
		document.getElementById('Out_7').innerHTML = elem[6];
	}else{
		alert("Incorrect value");
	}
})

// Удаление запрашиваемого элемента при нажатии на кнопку "Удалить элемент"
delEntryBtn.addEventListener('click', function(){
	if (indexInput.value>0 && indexInput.value<=itemsArr.length){
		
		while (ul.firstChild) {
			ul.removeChild(ul.firstChild);
		}
		itemsArr.splice(indexInput.value-1,1);
		
		itemsArr.forEach(item => {
			liMaker(item[0]+" "+item[1]);
		});
		localStorage.setItem('entries', JSON.stringify(itemsArr));
	}else{
		alert("Incorrect value");
	}
})

// Удаление всех элементов при нажатии на кнопку "Удалить все"
delAllBtn.addEventListener('click', function(){
	localStorage.clear();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  itemsArr = [];
})