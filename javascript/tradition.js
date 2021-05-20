

function RandomPic() {
	var pictures = ["matterhorn.jpeg", "devilbridge.jpeg"];
	var random = Math.floor(Math.random() * pictures.length);
	document.getElementById("pic").src = pictures[random];
}

setInterval(RandomPic, 3000);