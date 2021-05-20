let images = ["img/matterhorn.jpeg", "img/devilbridge.jpeg"];

function RandomPic() {
    var random = Math.floor(Math.random() * images.length);
    document.getElementById("pic").src = images[random];
}

(function timer() {
    RandomPic();
    setInterval(RandomPic, 3000);
}());
