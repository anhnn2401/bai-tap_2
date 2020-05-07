function myFunction() {
  var x = document.getElementById("idulmenu");
  if (x.className === "ulmenu") {
    x.className += " responsive-menu";
  }
  else {
    x.className = "ulmenu";
  }
}