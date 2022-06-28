function longestWord(str) {
    
    var words = str.split(' '); var longestIndex = '';

    for (var word of words) {
        if (word.length >= longestIndex.length) {
            longestIndex = word;
        };
    }
    return longestIndex;
};

// Shortest Function
function shortestWord(str) {
    var words = str.split(' '); var shortestWordIndex = words[0];
    
    for (var word of words) {
        if (word.length <= shortestWordIndex.length) {
            shortestWordIndex = word;
        };
    }
    return shortestWordIndex;
};

function wordLengths(str) {

    var words = str.split(' '); var sum = 0; var lengths = words.map(w => w.length);

    for (let i = 0; i < lengths.length; i++) {
        sum += lengths[i];
    };
    return sum;
};