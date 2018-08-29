// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime(44, 13), false, 'Время 44:13 невалидное.');
assert.equal(isValidTime(38, 75), false, 'Время 38:75 невалидное');

console.info('OK!');
