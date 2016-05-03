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
  var prev = document.getElementById('prev');
  function inc() {
    // click on image or next
    counter++;
    if (counter == 13) {
      counter = 1;
    }
    if (counter > 1)
      prev.style.display = 'inline';
    else
      prev.style.display = 'none';
    document.getElementById('currentImage').src = gensource(counter);
  }
  prev.style.display = 'none';
  var next = document.getElementById('next');
  var currentImage = document.getElementById('currentImage');
  currentImage.onclick = inc;
  next.onclick = inc;
  prev.onclick = function () {
    counter--;
    if (counter == 0) {
      counter = 12;
    }
    if (counter == 1)
      prev.style.display = 'none';
    document.getElementById('currentImage').src = gensource(counter);
  };
});
