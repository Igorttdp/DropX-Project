const navbar = document.querySelector(".navbar");

const instaBtn = document.querySelector("#wpp-btn");

window.onscroll = function () {
  scrollFunction();
}

function scrollFunction() {

  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    navbar.style.position = "fixed";
    instaBtn.classList.replace("wpp-btn-hidden", "wpp-btn-show");
  } else {
    navbar.style.position = "absolute";
    instaBtn.classList.replace("wpp-btn-show", "wpp-btn-hidden");
  }
}
