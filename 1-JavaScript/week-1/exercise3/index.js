/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {

    var rawMinutes = hours*60 + minutes + interval;

    if (rawMinutes <= 59 && rawMinutes >=10) {
        return('00:' + rawMinutes);
    }
    if (rawMinutes<=10) {
        return("00:0"+rawMinutes);
    }

    if (rawMinutes > 59) {
        hours = rawMinutes / 60;
        hours = Math.floor(hours);
        minutes = rawMinutes % 60;


        if (hours > 23) {
            hours -=24;
        }

        if (hours < 10) {
            hours = "0"+ hours;
        } else {
            hours = String(hours);
        }
        if (minutes < 10) {
            minutes = "0"+ minutes;
        } else {
            minutes = String(minutes);
        }

        return (hours + ':' +  minutes);
    }
};
