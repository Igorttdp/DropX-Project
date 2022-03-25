const navbar = document.querySelector(".navbar");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {

  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    navbar.style.position = "fixed";
  } else {
    navbar.style.position = "absolute";
  }
}