var hashtagsArray = ['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']

function toLower(acc, item){
    return acc.concat(item.toLowerCase());
}
var flattenTagsArray=hashtagsArray.reduce(toLower, []);

var uniqueTags=flattenTagsArray.reduce(gettingUnique,[]);

function gettingUnique(acc,hashtag) {
    if (!acc.includes(hashtag)){
        acc.push(hashtag);

    }
    return acc
}

result=uniqueTags.join(', ')


console.log(result)
