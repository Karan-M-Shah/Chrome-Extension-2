chrome.runtime.onMessage.addListener(function(reuqest, sender, sendResponse) {
    if(request.action == "show") {
        chrome.tabs.query({active:true, currentWindow:true}, function(tabs) {
        chrome.pageAction.show(tabs[0].id);
        });
    }
});


