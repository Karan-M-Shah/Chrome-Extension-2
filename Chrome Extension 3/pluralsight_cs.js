chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
   if(request.action == "courseCounts")
       {
           
       }
});

chrome.runtime.sendMessage({action:"show"});