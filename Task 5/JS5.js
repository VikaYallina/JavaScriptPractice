//1. Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3.
var arr1 = ['a','b','c'];
arr1.push(1,2,3);
document.getElementById("out_1").innerHTML = arr1;

//2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1].
var arr2 = [1,2,3];
document.getElementById("out_2").innerHTML = arr2.reverse();

//3. Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.
var arr3 = [1,2,3];
arr3.push(4,5,6);
document.getElementById("out_3").innerHTML = arr3;

//4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6.
var arr4 = [1,2,3];
arr4.unshift(4,5,6);
document.getElementById("out_4").innerHTML = arr4;

//5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент.
var arr5 = ['js', 'css', 'jq'];
document.getElementById("out_5").innerHTML = arr5.shift();

//6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент.
var arr6 = ['js', 'css', 'jq'];
document.getElementById("out_6").innerHTML = arr6.pop();

//7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3]
var arr7 = [1,2,3,4,5];
arr7sliced = arr7.slice(0,3);
document.getElementById("out_7").innerHTML = arr7sliced;

//8.  Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].
var arr8 = [1,2,3,4,5];
arr8.splice(1,2);
document.getElementById("out_8").innerHTML = arr8;

//9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
var arr9 = [1,2,3,4,5];
arr9.splice(3,0,'a','b','c');
document.getElementById("out_9").innerHTML = arr9;

//10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
var arr10 = [1,2,3,4,5];
arr10.splice(1,0,'a','b');
arr10.splice(6,0,'c');
arr10.splice(8,0,'e');
document.getElementById("out_10").innerHTML = arr10;

//11. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
var arr11 = [3,4,1,2,7];
arr11.sort();
document.getElementById("out_11").innerHTML = arr11;

//12. Дан объект {js:'test', jq: 'hello', css: 'world'}. Получите массив его ключей.
var obj12 = {js:'test',
		jq: 'hello',
		css: 'world'};
arr12 = Object.keys(obj12);
document.getElementById("out_12").innerHTML = arr12;

//13. Даны три массива [1,2,3],[‘Test’, ‘IVMiIT’], [4,5,6]. Объедините их вместе.
var arr13pt1 = [1,2,3];
arr13pt2 = ['Test', 'IVMiIT'];
arr13pt3 = [4,5,6];
arr13 = arr13pt1.concat(arr13pt2, arr13pt3);
document.getElementById("out_13").innerHTML = arr13;