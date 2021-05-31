function buttonUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


window.onscroll = function () {
    let btn = document.getElementById("button");
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
        btn.style.setProperty("--opacity", "0.5");
    }
    else {
        btn.style.setProperty("--opacity", "0");
    }
};


