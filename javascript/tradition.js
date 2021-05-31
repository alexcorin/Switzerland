var btn = document.getElementById("button");

//Funktionen f�r knappen som g�r att man kommer till toppen av hemsidan.
function buttonUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Funktion som kollar n�r man n�r n�r l�ngst nere av hemsidan och �ndrar opacity av uppknappen
window.onscroll = function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        btn.style.setProperty("--opacity", "0.5");
    }
    else {
        btn.style.setProperty("--opacity", "0");
    }
};


