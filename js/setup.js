
function makeURL(page) {
  var x = "http://zabawa.cs179.org/";
  //var x = "file://localhost/Users/fionawwood/Documents/zabawa/";
  x=x.concat(page);
  x=x.concat(".html");
  return x;
}

var firstGame = document.getElementById("firstGame");
console.log(firstGame);
firstGame.href = makeURL(game0);