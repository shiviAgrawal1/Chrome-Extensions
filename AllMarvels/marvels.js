console.log('Marvels End Game!!!!!!');



let filenames = [

  "download.jpg",
  "download1.jpg",
  "download2.jpg",
  "download3.jpg",
  "download4.jpg",
  "download5.jpg"

];


let imgs = document.getElementsByTagName('img');

for(img of imgs)
{
	let r = Math.floor(Math.random() * filenames.length);
	let file = "marvels/" + filenames[r];

	let url = chrome.extension.getURL(file);
	img.src = url;


	//console.log(img.src);
}