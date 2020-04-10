document.getElementById("Res_btn").onclick = getResult;

function getResult(){
	//
	in1 = "1. ФИО - "+document.getElementById("In_1").value;
	document.getElementById("Out_1").innerHTML = in1;
	
	//
	in2 = "2. Возраст - "+document.getElementById("In_2").value;
	document.getElementById("Out_2").innerHTML = in2;
	
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
	
	//5. Какое количество страниц вы читаете за один подход?
	var in5 = document.getElementById("In_5").value;
	if (in5>=0 && in5<50){
		out5 = "5. Кол-во страниц - Вам нужно читать больше страниц.";
	}else if (in5>=50 && in5<125){
		out5 = "5. Кол-во страниц - Вы читаете достаточно старниц.";
	} else if (in5>=125){
		out5 = "5. Кол-во страниц - За один подход вы читаете очень много страниц. Так держать?";
	} else{
		out5 = "5. Кол-во страниц - Некорректно введены данные.";
	}
	document.getElementById("Out_5").innerHTML = out5;
	
	// 6. Сколько часов в неделю вы читаете книги?
	var in6 = document.getElementById("In_6").value;
	if (in6>=0 && in6<2){
		out6 = "6. Время чтения - Вым нужно отводить больше времени на чтение";
	}else if (in6>=2 && in6<6){
		out6 = "6. Время чтения - Вы отводите достаточно времени на чтение.";
	} else if (in6>=6){
		out6 = "6. Время чтения - Вы отводите много времени на чтение. Прекрасно!";
	} else{
		out6 = "6. Время чтения - Некорректно введены данные.";
	}
	document.getElementById("Out_6").innerHTML = out6;
	
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
	
}