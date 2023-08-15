

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {    
    console.log("Received: " + request.original);

    console.log("Result: " + request.words)

    return true;
});