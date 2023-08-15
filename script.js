// identify an element to observe
let element = document.querySelector("body > div.main.page > div.middle > div.canvasArea > div.round > div")

// create a new instance of 'MutationObserver' named 'observer', 
// passing it a callback function
observer = new MutationObserver(function(mutationsList, observer) {
    chrome.runtime.sendMessage({syllable: element.innerHTML});    
});

// call 'observe' on that MutationObserver instance, 
// passing it the element to observe, and the options object
observer.observe(element, {characterData: false, childList: true, attributes: false});
