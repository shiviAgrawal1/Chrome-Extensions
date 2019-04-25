console.log("Content Script works");

// let paragraphs = document.getElementByTagName('p');
// for(para of paragraphs) {
// 	 para.style['background-color'] = 'red';


//    // para = 'hai all erase nice!' ;

// }

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
     console.log(message.txt);

     if(message.txt === "hello") {
     	  let paragraphs = document.getElementByTagName('p');
     	  for (para of paragraphs) {
     	  	  para.style['background-color'] = 'red';
     	  }
     }
}