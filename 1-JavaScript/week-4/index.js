/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var args = [].slice.call(arguments);
    collectionCopy = JSON.parse(JSON.stringify(collection));

    for (var argumentInd=1; argumentInd<args.length; argumentInd++) {
        if (args[argumentInd][0]==='select') {

            var fieldNamesArray = args[argumentInd][1];
            collectionCopy.forEach(filterFields);
            function filterFields(person) {
                var personHasFields=Object.keys(person);
                for (item=0; item<personHasFields.length; item++) {
                    if (fieldNamesArray.indexOf(personHasFields[item])===-1) {
                        delete person[personHasFields[item]]
                    }
                }
            }
        } else if (args[argumentInd][0]==="filterIn") {
            var fieldName = args[argumentInd][1];
            var fieldValuesArray = args[argumentInd][2];
            collectionCopy.forEach(filterPeople);
            function filterPeople(person, index) {
                if (fieldValuesArray.indexOf(person[fieldName])===-1) {
                    collectionCopy.splice(index,1);
                }
            }
        }

    }

    return collectionCopy;
}

/**
 * @params {String[]}
 */
function select() {
    fieldNamesArray=[].slice.call(arguments);
    return (['select', fieldNamesArray]);
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return['filterIn', property, values];

}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
