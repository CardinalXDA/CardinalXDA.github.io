// var getWords = 'Прохожу курс в компнии #intexsoft по #javascript';
// var normalizeWords = ['web', 'intexsoft', 'JavaScript', 'Intexsoft', 'script', 'programming'];
var book = {};

module.exports = {
	//1
	getWords: function (sentence) {
		var reg = /[#]([^\s]*)/ig;
		var result = (getWords.match(reg)+ "").replace(/#/, '').replace(/\,#/g, ' ').split(" ");
		console.log(result);
		return result
	},
	//2
	normalizeWords: function (words) {
		words = (words + "").toLowerCase().split(",");
		var filter = function (arr) {
			var noDublicate = arr.filter(function (argument) {
				return argument in mass ? 0 : mass[argument]=  1;
			});
			return noDublicate.join(', ');
		};
		return filter(words);
	},
	//3
	addressBook: function (command) {
		var cmd = command.split(' ');
	    switch (cmd[0]) {
	        case 'ADD':
	            var name = cmd[1];
	            var number = cmd[2].split(',');
	            if (!(name in book)) {
	                book[name] = number;
	            }
	            else {
	                number.forEach(function (num) {
	                    if (book[name].indexOf(num) === -1) {
	                        book[name].push(num);
	                    }
	                });
	            }
	            break;
	        case 'REMOVE_PHONE':
	            var numberDel = cmd[1];
	            for (var name in book) {
	                var index = book[name].indexOf(numberDel);
	                if (index >= 0) {
	                    if (book[name].length > 1)
	                        book[name].splice(index, 1);
	                    else
	                        delete book[name];
	                }
	            }
	            break;
	        case 'SHOW':
	            var str = [];
	            for (var name in book) {
	                str.push(name + ': ' + book[name].join(', '));
	            }
	            str.sort();
	            console.log(str);
	            break;
	    }
	}
};