//Здесь можно объявить переменные и функции, которые понядобятся вам для работы ваших функций
var reg = /[#]([^\s]*)/ig;

module.exports = {
	//1
    getWords: function(sentence){
    	var result = (getWords.match(reg)+ "").replace(/#/, '').replace(/\,#/g, ' ').split(" ");
		console.log(result);
    },
    //2
    normalizeWords: function(words){
    	words = (words+ "").toLowerCase().split(",");
		var filter = function (arr) {
			var mass = {};
			return arr.filter(function (argument) {
				return argument in mass ? 0 : mass[argument]=  1;
			})
		};
		console.log(filter(words));
    },
    //3
    addressBook: function(command){
		var addressBook = function (command){
			var cmd = command.split(' ');
			
			if (cmd[0] == 'ADD') {
				var name = cmd[1];
				var number = cmd[2].split(',');
				if(!addressBook.hasOwnProperty(name)){
					addressBook[name] = number;
				}
				else {
					number.forEach(function(num) {
					if(!addressBook[name].hasOwnProperty(num)) {
						addressBook[name].push(num); 
					}
				});}
			console.log(cmd);
			}

			if (cmd[0] == 'REMOVE_PHONE') {
				var numberDel = command.split(' ')[1];
				for(var name in addressBook){
					for(var number in addressBook[name]){
						if (addressBook[name][number] == numberDel){
							if(Object.keys(addressBook[name]).length == 1){
								delete addressBook[name];
							} else{
								delete addressBook[name][number];
							}
						return true;
						}
					}
				}
			return false;
			}

			if (cmd[0] == 'SHOW'){
				var str = [];
				for(var name in addressBook){
					str.push(name + ': ' + addressBook[name].join(', '));
				}
			str.sort();
			console.log(str);
			return str;
			}
		};
		/*addressBook('ADD Ivan 555-10-01,555-10-03'); // проверка
		addressBook('ADD Ivan 555-10-02');
		addressBook('SHOW');
		addressBook('REMOVE_PHONE 555-10-03');
		addressBook('ADD Alex 555-20-01');
		addressBook('SHOW');
		addressBook('REMOVE_PHONE 555-20-01');
		addressBook('SHOW');
*/	}
};