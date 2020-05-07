function myFunction() {
  var btnmenu = document.getElementById("idlistmenu");
  if (btnmenu.className === "list-menu") {
    btnmenu.className += " responsive-menu";
  }
  else {
    btnmenu.className = "list-menu";
  }
}