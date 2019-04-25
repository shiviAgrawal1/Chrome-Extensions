chrome.tabs.query({active:true, currentwindow:true}, function(tabs){
	chrome.pageAction.show(tabs[0].id);
});

