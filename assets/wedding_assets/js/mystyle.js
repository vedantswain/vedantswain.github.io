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

var couple_names = [
  ["Sugar", "Spice"],
  ["Peanut Butter", "Banana"],
  ["Converse",  "High Socks"],
  ["Marshmallow",   "Graham Cracker"],
  ["Spongebob", "Patrick"],
  ["Pink",  "Green"],
  ["Bread", "Butter"],
  ["Banh Mi", "Ca Phe"],
  ["Guava", "Salt"],
  ["Bagel", "Cream Cheese"], 
  ["Westley", "Buttercup"],
  ["Steve Rogers", "Bucky Barnes"],
  ["Wanda", "Vision"],
  ["Han Solo", "Chewbacca"],
  ["Yuji", "Todo"],
  ["Chicken", "Waffle"],
  ["Chai", "Samosa"],
]

function randomizeName() {
  random_ix = Math.floor(Math.random() * couple_names.length);
  couple = couple_names[random_ix]
  v_tag = document.getElementById("name-v")
  v_tag.innerHTML = couple[1]
  k_tag = document.getElementById("name-k")
  k_tag.innerHTML = couple[0]
}

randomizeName()
