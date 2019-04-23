function timeShift(inDate) {
    return {
        date: new Date(inDate),

        toString: function () {
            return this.date.getFullYear() + '-' +
                ("00" + (this.date.getMonth() + 1)).slice(-2) + '-' +
                ("00" + this.date.getDate()).slice(-2) + ' ' +

                ("00" + this.date.getHours()).slice(-2) + ':' +
                ("00" + this.date.getMinutes()).slice(-2);
        },//toString

        add: function(num, unit) {
            this.setValue(num, this.method[unit]);
            this.value = this.toString();
            return this;
        },
        substract: function(num, unit) {
            return this.add(-num, unit);
        },

        method: {
            "years": "FullYear",
            "months": "Month",
            "days": "Date",
            "hours": "Hours",
            "minutes": "Minutes"
        },

        setValue: function(num, unit) {
            this.date["setUTC" + unit](num + this.date["getUTC" + unit]());
            return this;
        },
    }
};
console.log(timeShift('2019-12-21 19:55').add(1, 'hours').substract(1, 'months'));


