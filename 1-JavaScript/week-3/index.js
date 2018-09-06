/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var re = /(\d{4})-(\d{2})-(\d{2})\s(\d{2}):(\d{2})/;
    var output = date.match(re);
    var year = output[1];
    var month = output[2]-1;
    var day = output[3];
    var hour = output[4]-3+6;
    var minute = output[5];
    var dateObj = { date: new Date(year, month, day, hour, minute),

        add: function (amount, property) {

            var allowedProperties=['days', 'hours', 'minutes', 'years', 'months'];
            if (amount < 0 || allowedProperties.indexOf(property)===-1 ) {
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

            var allowedProperties=['days', 'hours', 'minutes', 'years', 'months'];
            if (amount < 0 || allowedProperties.indexOf(property)==-1 ) {
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
