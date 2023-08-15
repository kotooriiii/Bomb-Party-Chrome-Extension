var words = [];

fetch(chrome.runtime.getURL('dictionary.csv'))
    .then((response) => response.text())
    .then((content) => {
        let lines = content.split("\n");
        for (line of lines) {
            let word = line.split(",")[0];
            words.push(word);
        }

        words = shuffle(words)

    });
function shuffle(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));

        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

function getSubstring(substr) {

    var foundsWords = []

    for (word of words) {
        if (word.includes(substr) && !foundsWords.includes(word)) {
            if (foundsWords.length < 20)
                foundsWords.push(word)
            else
                return foundsWords;
        }
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    chrome.tabs.sendMessage(sender.tab.id, { "original": request.syllable, "words": getSubstring(request.syllable) });
    sendResponse({});
});