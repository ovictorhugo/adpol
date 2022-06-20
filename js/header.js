// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("header_adpol");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

var navbarCategorias = document.getElementById("navbar-projetos-categorias");
var stickyCategorias = navbarCategorias.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

  if (window.pageYOffset > stickyCategorias) {
    navbarCategorias.classList.add("sticky-categorias");
  } else {
    navbarCategorias.classList.remove("sticky-categorias");
  }
}