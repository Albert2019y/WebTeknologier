var slideIndex = 0;
carousel();

var s = 'd'

function show(a) {
  var p = document.getElementsByClassName("stuff");
  for (i = 0; i < p.length; i++) {
    p[i].style.display = "none";
  }
  r = document.getElementById("right")
  var x = document.getElementById(a)
 
  x.style.display = "block"

  if (a == "G") {
    r.style.background = "#33853b"
  }
  if (a == "B") {
    r.style.background = "#233b5c"
  }
  if (a == "L") {
    r.style.background = "#9e3c32"
  }
  if (a == "d") {
    r.style.background = "wheat"
  }
  x.style.background = "inherit"
}


function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}
