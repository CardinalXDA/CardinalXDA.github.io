// var date = require('./index.js');
// var time = date('2017-05-16 13:45')
// .add(24, 'hours')
// .subtract(1, 'months')
// .add(3, 'days')
// .add(15, 'minutes');
// console.info(time.value);
// '2017-04-20 14:00';

// var d =new Date(2017, 05, 16, 13 ,45);
var date = ('2017-05-16 13:45');
function timeShift(time) {
	var date = time.split(' ');
	var year = date[0].split('-');
	var time = date[1].split(':');
	var d =new Date(year[0], year[1], year[2], time[0], time[1]);
	if (true) {}


	console.log(date);
	console.log(year);
	console.log(d);
};
console.log(timeShift('2017-05-16 13:45'));