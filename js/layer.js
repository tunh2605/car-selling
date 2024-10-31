var overlay = document.querySelector(".overlay");
var items = document.getElementsByClassName("nav-item");

for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseover', function () {
    overlay.style.opacity = 0.8; 
    overlay.style.zIndex = 999;
  });

  items[i].addEventListener('mouseleave', function () {
    overlay.style.opacity = 0; 
    overlay.style.zIndex = -1;
  });
}


