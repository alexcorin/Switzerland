const image = document.getElementById("pic");
let images = ["devilbridge.jpeg", "matterhorn.jpeg"], i = 0;

function RandomPic() {
    i < images.length ? i += 1 : i = 0;
    image.src = images[i];
}
setInterval(RandomPic, 3000);