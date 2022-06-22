function resizeMenu() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function hideMenu() {
  var x = document.getElementById("myTopnav");
  x.className = "topnav";
}
