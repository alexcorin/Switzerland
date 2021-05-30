var btn = document.querySelector(".up");

function buttonUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        btn.style.setProperty("--opacity", "0.5");
    }
    else {
        btn.style.setProperty("--opacity", "0");
    }
};


