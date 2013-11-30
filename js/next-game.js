function makeURL(page) {
  var x = "http://zabawa.cs179.org/";
  //var x = "file://localhost/Users/fionawwood/Documents/zabawa/";
  x=x.concat(page);
  x=x.concat(".html");
  return x;
}

console.log(game_mode);
var nextGame = document.getElementById("nextGame");
nextGame.href = makeURL(game_mode);
