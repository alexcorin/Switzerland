var pictures = ["matterhorn.jpeg", "devilbridge.jpeg"];

setInterval(RandomPic, 3000);

function RandomPic() {
	var random = Math.floor(Math.random() * pictures.length);
	document.getElementById("pic").src = pictures[random];
}