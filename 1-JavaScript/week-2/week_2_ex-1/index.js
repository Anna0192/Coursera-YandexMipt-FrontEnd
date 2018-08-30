/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var wordsArray = tweet.split(" ");


    function isHashtag(word) {
        return word.startsWith('#');
    }

    var listofHashtags=wordsArray.filter(isHashtag);

    function deleteHash(acc, item) {
        return acc.concat(item.slice(1));
    }

    return listofHashtags.reduce(deleteHash, []);
};



