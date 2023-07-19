let navbar = document.getElementById("nav-section");
let navOffset = navbar.offsetTop;
console.log(navbar);
window.addEventListener("scroll", function () {
  console.log(window.scrollY, navOffset);
  (window.scrollY >= navOffset) ?
    navbar.classList.add("fixed-nav") :
    navbar.classList.remove("fixed-nav")
});
