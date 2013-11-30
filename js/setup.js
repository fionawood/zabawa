
function makeURL(page) {
  var x = "http://zabawa.cs179.org/";
  //var x = "file://localhost/Users/fionawwood/Documents/zabawa/";
  x=x.concat(page);
  x=x.concat(".php");
  return x;
}

var firstGame = document.getElementById("oops");
firstGame.href = makeURL(game_mode);