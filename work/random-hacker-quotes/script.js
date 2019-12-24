var btn = document.getElementById("btn");
var body = document.body;
var index = Math.floor(Math.random() * 10);
var toQuotes = document.getElementById("quote_here");
var toAuth = document.getElementById("author_here");
toAuth.style.fontFamily = "Roboto";
// var colors = ["#006699", "hotpink", "darkorange", "FC4A1A", "007849", "0375B4", "4717f6", "b82601", "#C63D0F", "#DE1B1B", "#FFE658", "#118C4E", "3f2860", "1fda9a"];
function genRand() {
  var r = Math.floor(Math.random() * 100);
  var g = Math.floor(Math.random() * 100);
  var b = Math.floor(Math.random() * 100);

  r < 10 ? r += 10 : null;
  g < 10 ? g += 10 : null;
  b < 10 ? b += 10 : null;
}

$(document).ready(function () {
  giveQuote();
  function giveQuote() {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "./quotes.json");
    xhr.onload = function () {
      var data = JSON.parse(xhr.responseText);
      renderHTML(data);
    };
    xhr.send();
  }


  function renderHTML(data) {
    $("#quote_here").animate({
      opacity: 0,
    }, 500,
      function () {
        $(this).animate({
          opacity: 1
        }, 500)
      });
    $("#author_here").animate({
      opacity: 0,
    }, 500,
      function () {
        $(this).animate({
          opacity: 1
        }, 500)
      });
    var theString = "";
    var index = Math.floor(Math.random() * 10);
    btn.style.background = `#${r}${g}${b}`;
    genRand();
    body.style.background = `#${r}${g}${b}`;
    toQuotes.innerHTML = data[index].quote;
    toAuth.innerHTML = "-" + data[index].author;
    var tweet = document.getElementsByTagName("a")[0].setAttribute("href", 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + data[index].quote + '" ' + data[index].author));
  }
  btn.addEventListener("click", function () {
    giveQuote();
  });

});