var btn = document.getElementById("button");

//Funktionen för knappen som gör att man kommer till toppen av hemsidan.
function buttonUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Funktion som kollar när man når når längst nere av hemsidan och ändrar opacity av uppknappen
window.onscroll = function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        btn.style.setProperty("--opacity", "0.5");
    }
    else {
        btn.style.setProperty("--opacity", "0");
    }
};


