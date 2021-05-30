function SelectCulture(){  
    var backgrounds = ["img/food2.jpg", "img/watch1.jpeg", "img/food1.jpeg", "img/skiing1.jpg", "img/food4.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
function SelectFood(){
    var backgrounds = ["img/food2.jpg","img/food1.jpeg", "img/food3.jpg","img/food2.jpg","img/food1.jpeg","img/food2.jpg","img/food1.jpeg","img/food2.jpg","img/food1.jpeg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function SelectWatch(){
    var backgrounds = ["img/watch1.jpeg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function SelectSport(){
    var backgrounds = ["img/skiing1.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
window.onload = changeBg;