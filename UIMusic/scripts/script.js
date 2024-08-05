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
});

document.querySelector(".navigation-bar .float-bg").addEventListener("click", () => {
    document.querySelector(".navigation-bar .float-bg").classList.remove("active");
    document.querySelector(".navigation-bar .float").classList.remove("active");
    document.body.classList.remove('no-scroll');
});

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector(".navigation-bar .float") && document.querySelector(".navigation-bar .float").classList.contains('active')) {
        window.addEventListener('popstate', () => {
            console.log('popstate event fired');
            const floatElement = document.querySelector(".navigation-bar .float");
            const floatBgElement = document.querySelector(".navigation-bar .float-bg");

            if (floatElement && floatBgElement) {
                floatBgElement.classList.remove("active");
                floatElement.classList.remove("active");
                document.body.classList.remove('no-scroll');
            }
        });
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
