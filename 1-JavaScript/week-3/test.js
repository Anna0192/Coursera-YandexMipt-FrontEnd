var userInput='2017-05-16 13:45';


function date(userInput) {
    var re = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})/;
    var output = userInput.match(re);
    var year = output[1];
    var month = output[2]-1;
    var day = output[3];
    var hour = output[4]-3+6;
    var minute = output[5];
    var dateObj = {

        date: /*Здесь-строка!*/ new Date(year, month, day, hour, minute),
        _errorcatcher: function (amount, property) {
            var allowedProperties=['days', 'hours', 'minutes', 'years', 'months'];
            if (amount < 0 || allowedProperties.indexOf(property)===-1 ) {

                return true;
            }
        },
        add: function (amount, property) {

            if(this._errorcatcher(amount, property)===true) {
                throw new TypeError("Неверное значение");
            }
            if (property==="days") {
                this.date.setDate(this.date.getDate()+ amount);
                return this;
            }
            if (property==="hours") {
                this.date.setHours(this.date.getHours()+ amount);
                return this;
            }
            if (property==="months") {
                this.date.setMonth(this.date.getMonth()+ amount);
                return this;
            }
            if (property==="minutes") {
                this.date.setMinutes(this.date.getMinutes()+ amount);
                return this;
            }
            if (property==="years") {
                this.date.setFullYear(this.date.getFullYear()+ amount);
                return this;
            }

        },


        subtract: function (amount, property) {
                if(this._errorcatcher(amount, property)===true) {
                    throw new TypeError("Неверное значение");

                }

                if (property==="days") {
                    this.date.setDate(this.date.getDate() - amount);
                    return this;
                }
                if (property==="hours") {
                    this.date.setHours(this.date.getHours() - amount);
                    return this;
                }
                if (property==="months") {
                    this.date.setMonth(this.date.getMonth()- amount);
                    return this;
                }
                if (property==="minutes") {
                    this.date.setMinutes(this.date.getMinutes()- amount);
                    return this;
                }
                if (property==="years") {
                    this.date.setFullYear(this.date.getFullYear()- amount);
                    return this;
                }

        }
    };
return dateObj;
};




var time1 =date(userInput).add(24, 'hours').add(3, 'days').add(15,'minutes').subtract(1,'months');


console.log(time1.date);