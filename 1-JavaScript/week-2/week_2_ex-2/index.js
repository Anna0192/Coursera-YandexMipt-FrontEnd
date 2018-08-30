/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {


    function toLower(acc, item){
        return acc.concat(item.toLowerCase());
    }
    var flattenTagsArray=hashtags.reduce(toLower, []);

    var uniqueTags=flattenTagsArray.reduce(gettingUnique,[]);

    function gettingUnique(acc,hashtag) {
        if (!acc.includes(hashtag)){
            acc.push(hashtag);

        }
        return acc
    }

    result=uniqueTags.join(', ');
    return result;

};
