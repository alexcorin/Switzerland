function SelectCulture(){  
    var backgrounds = ["img/food2.jpg", "img/watch1.jpg", "img/food1.jpeg", "img/skiing1.jpg", "img/skiing2.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
window.onload = changeBg;
(function timer() {
    SelectCulture();
    setInterval(SelectCulture, 3000);
}());