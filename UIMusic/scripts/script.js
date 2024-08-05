$(document).ready(function () {
    // Cache jQuery selectors
    const $navBar = $(".navigation-bar");
    const $floatMenu = $(".navigation-bar .float");
    const $floatBg = $(".navigation-bar .float-bg");
    const $body = $("body");
    const $toTopButton = $("#toTop");

    // Handle scroll event
    $(window).on("scroll", function () {
        $navBar.toggleClass("bg-blur", $(window).scrollTop() > 80);
        $toTopButton.toggle($(window).scrollTop() > 20);
    });

    // Toggle float menu
    function toggleFloatMenu(isActive) {
        $floatMenu.toggleClass("active", isActive);
        $floatBg.toggleClass("active", isActive);
        $body.toggleClass('no-scroll', isActive);
    }

    // Open and close float menu
    $(".menubtn").on("click", function () {
        toggleFloatMenu(true);
    });

    $floatBg.on("click", function () {
        toggleFloatMenu(false);
    });

    // Handle media query change
    const mediaQuery = window.matchMedia("(min-width: 900px)");

    function handleMediaChange(event) {
        if (!event.matches) {
            toggleFloatMenu(false);
        }
    }

    mediaQuery.addListener(handleMediaChange);
    handleMediaChange(mediaQuery);

    // Scroll to top button
    $toTopButton.on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });
});
