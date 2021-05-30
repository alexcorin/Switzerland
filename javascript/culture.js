function SelectCulture(){  
    var backgrounds = ["img/food2.jpg", "img/watch1.jpeg", "img/food1.jpeg", "img/skiing1.jpg", "img/food4.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgrounds.length));
    document.body.style.background = 'url('+backgrounds[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
function SelectFood(){
    var backgroundsFood = ["img/food2.jpg", "img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg","img/food2.jpg", "img/food3.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsFood.length));
    document.body.style.background = 'url('+backgroundsFood[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function SelectWatch(){
    var backgroundsWatch = ["img/watch1.jpeg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsWatch.length));
    document.body.style.background = 'url('+backgroundsWatch[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}

function SelectSport(){
    var backgroundsSport = ["img/skiing1.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsSport.length));
    document.body.style.background = 'url('+backgroundsSport[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
}
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);

    if (scrolled <= 220 && scrolled >= 0){
        SelectFood();
    }

    if (scrolled <= 500 && scrolled >= 220){
        SelectWatch();
    }

    if (scrolled <= 800 && scrolled >= 500){
        SelectSport();
    }
    
});