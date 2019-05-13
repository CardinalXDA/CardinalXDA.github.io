module.exports = Collection;

/**
 * Конструктор коллекции
 */
function Collection() {
	Array.prototype.constructor.apply(this, arguments);
}


// Методы коллекции
Collection.prototype.values = function () {
	return Array.from(this);
};

Collection.prototype.at = function (value) {
	if (value <= 0 || value > this.length) return null;
	else return this[value - 1];
};

Collection.prototype.append = function (value) {
	if (value instanceof Collection) {
		for (let value of value) this.push(value);
	} else this.push(value);
};

Collection.prototype.removeAt = function (value) {
	if (value === 0 || value > this.length) return false;
	this.splice(value - 1, 1);
	return true;
};

Collection.prototype.count = function () {
	return this.length;
};


/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arg) {
	var collections = new Collection();
	if (arg[0] instanceof Array) {
		var arr = arg[0];
		for (var value of arr) {
			collections.push(value);
		}
	} else{
		for(value of arg){
			collections.push(value);
		}
	}
	return collections;
};