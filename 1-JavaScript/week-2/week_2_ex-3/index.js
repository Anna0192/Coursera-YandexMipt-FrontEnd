// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var insertedCommand = command.split(' ')[0];

    if (insertedCommand==='ADD') {
        var nameString = command.split(' ')[1];

        var numbersString = command.split(' ')[2];

        if (numbersString.includes(',')) {
            var numbersArray=numbersString.split(',')

        } else
            var numbersArray=[].concat(numbersString);
        return addNumbercmd(phoneBook, nameString, numbersArray);
    }
    if (insertedCommand==="REMOVE_PHONE") {
        var numberString = command.split(' ')[1];
        return removePhonecmd(phoneBook, numberString);

    }

    if (insertedCommand==='SHOW') {
        return showContactcmd(phoneBook);
    }



};

function addNumbercmd(phoneBook, nameString, numbersArray) {

    if (!phoneBook.hasOwnProperty(nameString)) {

        phoneBook[nameString] = numbersArray;

        return phoneBook;

    } else {
        phoneBook[nameString]=phoneBook[nameString].concat(numbersArray);
        return  phoneBook;
    }
}

function removePhonecmd(phoneBook, numberString) {
    for (var name in phoneBook) {
        if (phoneBook.hasOwnProperty(name)) {
            var numbers = phoneBook[name];

            if (numbers.includes(numberString)) {
                numbers.splice(numbers.indexOf(numberString), 1);

                return true
            }
        }
    }
    return false;
}

function showContactcmd(phoneBook) {

    var contacts = [];
    var contactNames=Object.keys(phoneBook).sort();


    for (var nameIndex in contactNames) {
        var name=contactNames[nameIndex];

        if (phoneBook.hasOwnProperty(name)) {

            if (phoneBook[name].length!==0) {

                contacts=contacts.concat(name.toString()+': '+phoneBook[name].join(", "));

            }
        }
    }
    return(contacts);

}
