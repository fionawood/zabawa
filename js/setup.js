function shuffle(array) {
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter--) {
        // Pick a random index
        index = (Math.random() * (counter + 1)) | 0;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function makeURL(page) {
  //var x = "http://zabawa.cs179.org/";
  var x = "file://localhost/Users/fionawwood/Documents/zabawa/";
  x=x.concat(page);
  x=x.concat(".html");
  return x;
}

var firstGame = document.getElementById("firstGame");
firstGame.href = makeURL("text-adventure");