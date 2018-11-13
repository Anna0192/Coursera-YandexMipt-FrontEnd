/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */

function query(collection, ...rest) {
    var collectionCopy = JSON.parse( JSON.stringify(collection) );  /*array*/
    var functions = rest.sort();

    for (var i=0; i<functions.length; i++) {
        collectionCopy=functions[i](collectionCopy);
    }
    return collectionCopy;
}



function filterIn(fieldName, fieldValuesArray) {
    var field = fieldName;  /*название поля для сортировки*/
    var values = fieldValuesArray; /*допустимые значения*/
    function checkifPersonProper(person) {
        return fieldValuesArray.indexOf(person[field]) !== -1;
    }

    return function(collectionCopy) {
        collectionCopy = collectionCopy.filter(checkifPersonProper);
        return collectionCopy
    }
}

function select() {
    var [fieldNames] = [arguments];
    [...fieldNames]=fieldNames; /*fieldNames-array*/
    return function (collectionCopy) {
        var [collectionCopy] = arguments;  /*collectionCopy-array*/
        collectionCopy=collectionCopy.map(render);
        function render(person){ /*person-Object*/
            return Object.keys(person)
                .filter(key =>fieldNames.includes(key))
                .reduce((obj, key) => {
                    return {
                        ...obj,
                        [key]: person[key]
                    };
                }, {})


        }
        return collectionCopy;
    }

}






module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
