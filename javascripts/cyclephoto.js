document.addEventListener('DOMContentLoaded', function (event) {
  var counter = 1;
  function gensource(i) {
    var e = 'images/full/pandl/';
    if (i < 10) {
      e += '0';
    }
    e += i + '.jpg';
    return e;
  }
  var next = document.getElementById('currentImage');
  next.onclick = function () {
    counter++;
    if (counter == 13) {
      counter = 1;
    }
    document.getElementById('currentImage').src = gensource(counter);
  };
});
