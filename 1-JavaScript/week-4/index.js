/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */


function query(collection, ...rest) {
    var collectionCopy = JSON.parse( JSON.stringify(collection) );  /*array*/
    var functions = rest.sort();
    functions;
    for (var i=0; i<functions.length; i++) {

        collectionCopy=functions[i](collectionCopy);
    }
    return collectionCopy;
}



function filterIn(fieldName, fieldValuesArray) {

    function checkifPersonProper(person) {

        return fieldValuesArray.indexOf(person[fieldName]) !== -1;

    }

    return function filterIn(collectionCopy) {
        if (fieldName !== undefined && fieldValuesArray.length>0) {
            collectionCopy = collectionCopy.filter(checkifPersonProper);
            return collectionCopy
        } else {
            return collectionCopy
        }
    }
}


function select() {
    var [fieldNames] = [arguments];
    [...fieldNames]=fieldNames; /*fieldNames-array*/
    return function select(collectionCopy) {
        var allowedFields = collectionCopy.reduce((acc, person ) => {
            return acc.concat(Object.keys(person)||[])
        }, []);
        for (var i=0; i<fieldNames.length; i++) {
            if (allowedFields.indexOf(fieldNames[i])===-1) {
                fieldNames.splice(i, 1);
            }
        }
        if (fieldNames.length>0 && fieldNames[0].length>0 ) {
            /*collectionCopy-array*/
            collectionCopy = collectionCopy.map(render);

            function render(person) { /*person-Object*/
                return Object.keys(person)
                             .filter(key => fieldNames.includes(key))
                             .reduce((obj, key) => {
                        return {
                            ...obj,
                            [key]: person[key]
                        };
                    }, {})


            } }

            return collectionCopy;

    } }




module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
