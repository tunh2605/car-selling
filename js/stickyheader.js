window.onscroll = function() {
    let header = document.querySelector(".header");
    let headerHeight = header.offsetHeight; 
    let nav = document.querySelector(".nav-items-container");
    let logo = document.querySelector(".nav-logo");

    if (window.pageYOffset > headerHeight) {
        logo.style.width = "10%";
        nav.style.width = "90%";
        logo.style.borderBottom = "none";
    } else {
        logo.style.width = "100%";
        nav.style.width = "100%";
        logo.style.borderBottom = "";
    }
};
