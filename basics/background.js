console.log("background running");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log("button clicked");
	console.log(tab); // about current tab opened

	let msg = {
		txt: "hello"
	}
	//chrome.tabs.sendMessage(tab.id, "hai");
	chrome.tabs.sendMessage(tab.id, msg);
}


