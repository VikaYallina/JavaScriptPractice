document.getElementById("check_btn").onclick = checkAnswers;

function checkAnswers(){
	corr_answer_Arr = ["3", "4", "4",
					   "2", "3", "1",
					   "2", "1", "4",
					   "2", "2", "4",
					   "1", "2", "2"];
	usr_answer_Arr = [];
	question_count = 15;
	var correct_answers = 0;
	answ_1 = document.getElementById("o_1").value;
	usr_answer_Arr.push(answ_1);
	answ_2 = document.getElementById("o_2").value;
	usr_answer_Arr.push(answ_2);
	answ_3 = document.getElementById("o_3").value;
	usr_answer_Arr.push(answ_3);
	answ_4 = document.getElementById("o_4").value;
	usr_answer_Arr.push(answ_4);
	answ_5 = document.getElementById("o_5").value;
	usr_answer_Arr.push(answ_5);
	answ_6 = document.getElementById("o_6").value;
	usr_answer_Arr.push(answ_6);
	answ_7 = document.getElementById("o_7").value;
	usr_answer_Arr.push(answ_7);
	answ_8 = document.getElementById("o_8").value;
	usr_answer_Arr.push(answ_8);
	answ_9 = document.getElementById("o_9").value;
	usr_answer_Arr.push(answ_9);
	answ_10 = document.getElementById("o_10").value;
	usr_answer_Arr.push(answ_10);
	answ_11 = document.getElementById("o_11").value;
	usr_answer_Arr.push(answ_11);
	answ_12 = document.getElementById("o_12").value;
	usr_answer_Arr.push(answ_12);
	answ_13 = document.getElementById("o_13").value;
	usr_answer_Arr.push(answ_13);
	answ_14 = document.getElementById("o_14").value;
	usr_answer_Arr.push(answ_14);
	answ_15 = document.getElementById("o_15").value;
	usr_answer_Arr.push(answ_15);
	
	for (var i = 0; i<corr_answer_Arr.length; i++){
		if (usr_answer_Arr[i] == corr_answer_Arr[i]){
			correct_answers+=1;
		}
	}
	
	result = correct_answers/question_count *100;
	document.getElementById("result").innerHTML = "Тест выполнен верно на "+result+"% .";
}