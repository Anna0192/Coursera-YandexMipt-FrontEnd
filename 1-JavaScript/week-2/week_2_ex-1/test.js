
tweet='Ето #твит вот так #вот';

var wordsArray = tweet.split(" ");


var listofHashtags=wordsArray.filter(isHashtag);

function isHashtag(word) {
    return word.startsWith('#');
}

function deleteHash(acc, item) {
   return acc.concat(item.slice(1));
}
var listWithoutHash=listofHashtags.reduce(deleteHash, []);
console.log(listWithoutHash);

