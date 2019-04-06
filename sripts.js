// Задача №1
/*var hour = +prompt('Введите часы', );
var minute = +prompt('Введите минуты', );
if (hour >=0 && hour <=23 && minute >=0 && minute <=59) {
	alert('Коректное время ' + hour + ':' + minute);
} else {
	alert('Не коректное время ' + hour + ':' + minute);
};*/

// Задача №2
/*function addMinutes(hours, min, addMin){
	var newMin = (min + addMin) % 60;
	var newHours = (hours + Math.floor((min + addMin)/60)) % 24;
		return newHours + ":" + newMin;
}
console.log(addMinutes(10, 30, 40));*/

// Задача №3
/*var month = +prompt('Введите номер месяца', );
if (month <= 12) {
	if (month == 12 || month >=1 && month <=2) {
		alert( 'Зима' );
	};
	if (month >= 3 && month <= 5) {
		alert( 'Весна' );
	};
	if (month >= 6 && month <= 8) {
		alert( 'Лето' );
	};
	if (month >= 9 && month <= 11) {
		alert( 'Осень' );
	};
} else {
	alert( 'Месяцев в году 12 а не ' +  month);
}*/

// Задача №4
/*function declension(day, days) {
    var result;
    count = day % 100;
    if (count >= 5 && count <= 20) {
        result = days['2'];
    } else {
        count = count % 10;
        if (count == 1) {
            result = days['0'];
        } else if (count >= 2 && count <= 4) {
            result = days['1'];
        } else {
            result = days['2'];
        }
    }
    return result;
}
var days = ['День','Дня','Дней'];
var day = +prompt('Введите номер дня', );
	alert (day + ' ' + declension(day, days) );*/

//Задача №5
/*var req = function sum(a) {
	if (a === 1) {
		return 1;
	} else {
		return a + sum(--a);
	}    
}
var summ = +prompt('Введите число для подсчёта суммы', );
console.log(req(summ));*/

//Задача №6
/*var multiplicationTable = +prompt('Введите число', );
	for (var i = 1; i <= 10; i++) {
		result =  multiplicationTable * i;
		console.log(multiplicationTable + '*' + i + '=' + result);
	};*/
	
//Задача №7, прямоугольник
var x1 = 5, y1 = 0, x2 = -1, y2 = 3.5, x3 = -7.5, y3 = -1, x4 = -7, y4 = -2.5;
var x = +prompt('Введите координаты точки x', ); 
var y = +prompt('Введите координаты точки y', );

function graf(Px, Py, Ax, Ay, Bx, By) {
	return (Bx - Ax) * (Py - Ay) - (By - Ay) * (Px - Ax);
}

var p1 = graf(x, y, x1, y1, x2, y2);
var p2 = graf(x, y, x2, y2, x3, y3);
var p3 = graf(x, y, x3, y3, x4, y4);
var p4 = graf(x, y, x4, y4, x1, y1);

if ((p1 <= 0 && p2 <= 0 && p3 <= 0 && p4 <= 0) || (p1 >= 0 && p2 >= 0 && p3 >= 0 && p4 >= 0)) {
	alert('Точка ' + x + ':' + y + ' входит внутрь четырёхугольника');
} else {
	alert('Точка ' + x + ':' + y + ' не входит внутрь четырёхугольника');
};
