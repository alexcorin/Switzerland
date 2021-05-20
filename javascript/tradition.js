var pictures = ["matterhorn.jpeg", "devilbridge.jpeg"];
var picTimer;

function picTimer() {
	setInterval(RandomPic, 3000);
}

function RandomPic() {
	var random = Math.floor(Math.random() * pictures.length);
	document.getElementById("id").src = pictures[random];
}