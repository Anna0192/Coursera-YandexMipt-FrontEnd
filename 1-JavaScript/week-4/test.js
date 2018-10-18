var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];

function query(collection) {
    var args = [].slice.call(arguments);
    collectionCopy = JSON.parse(JSON.stringify(collection));

    for (var argumentInd=1; argumentInd<args.length; argumentInd++) {

        if (args[argumentInd][0]==='filterIn') {
            var fieldName = args[argumentInd][1];

            var fieldValuesArray = args[argumentInd][2];
            collectionCopy.forEach(filterPeople);
            function filterPeople(person, index) {
                if (fieldValuesArray.indexOf(person[fieldName])===-1) {
                    collectionCopy.splice(index,1);
                }
            }
        }
         else if (args[argumentInd][0]==="select")  {

            var fieldNamesArray = args[argumentInd][1];
            collectionCopy.forEach(filterFields);
            function filterFields(person) {
                var personHasFields=Object.keys(person);
                for (item=0; item<personHasFields.length; item++) {
                    if (fieldNamesArray.indexOf(personHasFields[item])===-1) {
                        delete person[personHasFields[item]];
                    }
                }
            }
        }

    }

    return collectionCopy;
}




function select () {
    var fieldNamesArray=[].slice.call(arguments);
    return (['select', fieldNamesArray]);
}

function filterIn(fieldName, fieldValuesArray) {

    return (['filterIn', fieldName, fieldValuesArray]);
}





console.log(query(
    friends,
    select('name', 'gender', 'email'),
    filterIn('favoriteFruit', ['Яблоко', 'Картофель'])

));