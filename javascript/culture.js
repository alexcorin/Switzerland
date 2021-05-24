function SelectCulture(){  
    var backgrounds = ["css/img2/musik1.jpg", "css/img2/watch1.jpg", "css/img2/food1.jpeg"];
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