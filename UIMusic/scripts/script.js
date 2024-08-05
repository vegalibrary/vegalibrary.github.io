window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        document.querySelector(".navigation-bar").classList.add("bg-blur");
    } else {
        document.querySelector(".navigation-bar").classList.remove("bg-blur");
    }
});

document.querySelector(".menubtn").addEventListener("click", () => {
    document.querySelector(".navigation-bar .float").classList.add("active");
    document.querySelector(".navigation-bar .float-bg").classList.add("active");
    document.body.classList.add('no-scroll');
    history.pushState({ active: true }, "Active State", "#active");
});

document.querySelector(".navigation-bar .float-bg").addEventListener("click", () => {
    document.querySelector(".navigation-bar .float-bg").classList.remove("active");
    document.querySelector(".navigation-bar .float").classList.remove("active");
    document.body.classList.remove('no-scroll');
    history.replaceState(null, null, location.href);
});

window.addEventListener('popstate', (event) => {
    if (event.state && event.state.active) {
        floatElement.classList.remove('active');
        floatBgElement.classList.remove('active');
        document.body.classList.remove('no-scroll');

        // Optionally, replace state to avoid additional history entries
        history.replaceState(null, null, location.href);
    }
});


function CloseFloatMenu(x) {
    if (x.matches) {
        document.querySelector(".navigation-bar .float").classList.remove("active");
        document.querySelector(".navigation-bar .float-bg").classList.remove("active");
    } else {
        document.querySelector(".navigation-bar .float").classList.remove("active");
        document.querySelector(".navigation-bar .float-bg").classList.remove("active");
    }
}

var x = window.matchMedia("(min-width: 900px)");
CloseFloatMenu(x);
x.addListener(CloseFloatMenu);

mybutton = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
