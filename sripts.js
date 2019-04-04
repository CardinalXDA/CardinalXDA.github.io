var hour = prompt('Введите часы', );
var minute = prompt('Введите минуты', );
var isTimeValid = [hour, minute];

if (isTimeValid[0] >=0 && isTimeValid[0] <=23 && isTimeValid[1] >=0 && isTimeValid[1] <=59) {
	alert('Коректное время ' + isTimeValid);
} else {
	alert('Не коректное время ' + isTimeValid);
}


function addMinutes(hours, min, addMin){
	var newMin = (min + addMin) % 60;
	var newHours = (hours + Math.floor((min + addMin)/60)) % 24;
		return newHours + ":" + newMin;
}
console.log(addMinutes(10, 30, 40));