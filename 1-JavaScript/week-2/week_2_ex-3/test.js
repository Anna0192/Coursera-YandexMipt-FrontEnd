/**
phoneBook('ADD Ivan 555-10-02');
*/

var containerBook = {Daria: ["545-20-01"], sergey:[], Alex: ["555-20-01"], Ivan: ["595-10-01", "555-10-02", "557-10-02"]};



function phoneBook (insertedCommand) {
    var command = insertedCommand.split(' ')[0];

    if (command==='ADD') {
        var nameString = insertedCommand.split(' ')[1];

        var numbersString = insertedCommand.split(' ')[2];

        if (numbersString.includes(',')) {
            var numbersArray=numbersString.split(',')

        } else
            var numbersArray=[].concat(numbersString);
        return addNumbercmd(containerBook, nameString, numbersArray);
    }
    if (command==="REMOVE_PHONE") {
        var numberString = insertedCommand.split(' ')[1];
        return removePhonecmd(containerBook, numberString);

    }

    if (command==='SHOW') {
        return showContactcmd(containerBook);
    }
}



function addNumbercmd(containerBook, nameString, numbersArray) {

    if (!containerBook.hasOwnProperty(nameString)) {

        containerBook[nameString] = numbersArray;

        return containerBook;

    } else {
        containerBook[nameString]=containerBook[nameString].concat(numbersArray);
        return  containerBook;
    }
}

function removePhonecmd(containerBook, numberString) {
    for (var name in containerBook){
        if (containerBook.hasOwnProperty(name)) {
            var numbers=containerBook[name];

            if (numbers.includes(numberString)) {
                numbers.splice(numbers.indexOf(numberString), 1);

                return true}
        }}
        return false;
}

function showContactcmd(containerBook) {

    var contacts = [];
    var contactNames=Object.keys(containerBook).sort();


    for (var nameIndex in contactNames) {
        var name=contactNames[nameIndex];

        if (containerBook.hasOwnProperty(name)) {

            if (containerBook[name].length!==0) {

                contacts=contacts.concat(name.toString()+': '+containerBook[name].join(", "));

            }
        }
    }
    return(contacts);

}


console.log(phoneBook('SHOW'));



