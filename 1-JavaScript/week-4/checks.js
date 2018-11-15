// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var lib = require('./index.js');

// Коллекция данных
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

// Aserting parameters to function - select и filterIn are in the right order
var result = lib.query(
    friends,
    lib.select('name', 'gender', 'email'),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым Comparing result
assert.deepEqual(result, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

console.info('OK!');

// asserting parameters - select and filterIn reversed
var result1 = lib.query(
    friends,

    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель']),
    lib.select('name', 'gender', 'email'),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result1, [
    { name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com' },
    { name: 'Эмили', gender: 'Женский', email: 'example@example.com' },
    { name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com' },
    { name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com' },
    { name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com' }
]);

console.info('OK!');

// only select passed
var result2 = lib.query(
    friends,

    lib.select('name', 'gender', 'email'),
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result2, [{name: 'Сэм', gender: 'Мужской', email: 'luisazamora@example.com'},
    {name: 'Эмили', gender: 'Женский', email: 'example@example.com'    },
    {name: 'Мэт', gender: 'Мужской', email: 'danamcgee@example.com'},
    {name: 'Брэд', gender: 'Мужской', email: 'newtonwilliams@example.com'},
    {name: 'Шерри', gender: 'Женский', email: 'danamcgee@example.com'},
    {name: 'Керри', gender: 'Женский', email: 'danamcgee@example.com'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com'}]);

console.info('OK!');

//only collection passed to function

var result3 = lib.query( friends );

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result3, [{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Брэд',gender: 'Мужской',email: 'newtonwilliams@example.com',favoriteFruit: 'Банан'},
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Керри',gender: 'Женский',email: 'danamcgee@example.com', favoriteFruit: 'Апельсин'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]


);

console.info('OK!');

//only  collection and 'filterIn'  passed to query function

var result4 = lib.query(
    friends,
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);

// Сравниваем полученный результат с ожидаемым
assert.deepEqual(result4,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]
);

console.info('4OK!');
// filterIn() или filterIn('favoriteFruit', [])  - применяем query и select к первоначальному массиву friends.

var result5 = lib.query(
    friends,
    lib.filterIn()
);



assert.deepEqual(result5,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Брэд',gender: 'Мужской',email: 'newtonwilliams@example.com',favoriteFruit: 'Банан'},
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Керри',gender: 'Женский',email: 'danamcgee@example.com', favoriteFruit: 'Апельсин'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]
);

console.info('5OK!');

/// filterIn() или filterIn('favoriteFruit', [])  - применяем query и select к первоначальному массиву friends.
var result6 = lib.query(
    friends,
    lib.filterIn('favoriteFruit', [])
);

assert.deepEqual(result6,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Брэд',gender: 'Мужской',email: 'newtonwilliams@example.com',favoriteFruit: 'Банан'},
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Керри',gender: 'Женский',email: 'danamcgee@example.com', favoriteFruit: 'Апельсин'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]
);

console.info('6OK!');
// select(['Несуществующее поле']) - в результате выборки выводим результат фильтрации

var result7 = lib.query(
    friends,
    lib.select('favoriteGame')
);

assert.deepEqual(result7,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Брэд',gender: 'Мужской',email: 'newtonwilliams@example.com',favoriteFruit: 'Банан'},
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Керри',gender: 'Женский',email: 'danamcgee@example.com', favoriteFruit: 'Апельсин'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]
);

console.info('OK!');
//filterIn('favoriteFruit', ['Несуществующее значение']) - в результате фильтрации не остается объектов

var result8 = lib.query(
    friends,
    lib.filterIn('favoriteFruit', ['Grapes'])
);


assert.deepEqual(result8,[]);

console.info('8OK!');
//select([]) - игнорируйте такую операцию и возвращайте отфильтрованную коллекцию со всеми полями.
var result9 = lib.query(
    friends,
    lib.select([]),
    lib.filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
);


assert.deepEqual(result9,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com', favoriteFruit: 'Картофель'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com',favoriteFruit: 'Яблоко'    },
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com',favoriteFruit: 'Картофель'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com', favoriteFruit: 'Картофель'}]
);

console.info('9OK!');
//query(friends, filterIn('favoriteFruit', ['Яблоко']), filterIn('gender', ['Женский'])) - выведет всех женщин, которые любят яблоки?
var result10 = lib.query(
    friends,

    lib.filterIn('favoriteFruit', ['Яблоко']),
    lib.filterIn('gender', ['Женский']),
    );

assert.deepEqual(result10,[{name: 'Эмили',gender: 'Женский',email: 'example@example.com',favoriteFruit: 'Яблоко'}]
);

console.info('OK!');
// 2) поля для селекции могут повторяться в одном операторе select.
var result11 = lib.query(
    friends,
    lib.select('name', 'gender', 'email', 'email')

);

assert.deepEqual(result11,[{name: 'Сэм',gender: 'Мужской', email: 'luisazamora@example.com'},
    {name: 'Эмили',gender: 'Женский',email: 'example@example.com'},
    {name: 'Мэт',gender: 'Мужской',email: 'danamcgee@example.com'  },
    {name: 'Брэд',gender: 'Мужской',email: 'newtonwilliams@example.com'},
    {name: 'Шерри',gender: 'Женский',email: 'danamcgee@example.com'},
    {name: 'Керри',gender: 'Женский',email: 'danamcgee@example.com'},
    {name: 'Стелла', gender: 'Женский', email: 'waltersguzman@example.com'}]
);

console.info('OK!');