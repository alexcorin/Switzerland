
/* De mest effektiva sättet jag hitta för att ändra bakgrunden för body*/

function SelectFood(){
    var backgroundsFood = ["img/food2.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsFood.length));
    document.body.style.background = 'url('+backgroundsFood[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";


}

function SelectWatch(){
    var backgroundsWatch = ["img/watch1.jpeg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsWatch.length));
    document.body.style.background = 'url('+backgroundsWatch[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
}

function SelectSport(){
    var backgroundsSport = ["img/skiing1.jpg"];
    var imgShown = document.body.style.backgroundImage;
    var newNumber = Math.floor(Math.random()*(backgroundsSport.length));
    document.body.style.background = 'url('+backgroundsSport[newNumber]+')';
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";

}

/* Kollar vart de är på sidan och ändrar bakgrunden */

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    console.log(scrolled);

    if (scrolled <= 220 && scrolled >= 0){
        SelectFood();
    }

    if (scrolled <= 720 && scrolled >= 240){
        SelectSport();
    }

    if (scrolled <= 1000 && scrolled >= 740){
        SelectWatch();
    }
    
});

function buttonUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}