document.addEventListener('DOMContentLoaded', function (event) {
  var counter = 1;
  var album = 1;
  function gensource(i, j) {
    album = j;
    var e = 'images/full/';
    if (j) {
      e += 'pandl/';
    } else {
      e += 'handb/';
    }
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
      prev.style.visibility = 'visible';
    else
      prev.style.visibility = 'hidden';
    document.getElementById('currentImage').src = gensource(counter, album);
  }
  prev.style.visibility = 'hidden';
  var next = document.getElementById('next');
  var currentImage = document.getElementById('currentImage');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  link2.onclick = function () {
    counter = 1;
    prev.style.visibility = 'hidden';
    if (link2.text.includes('h')) {
      document.getElementById('currentImage').src = gensource(counter, 0);
    } else {
      document.getElementById('currentImage').src = gensource(counter, 1);
    }
    var link3 = link2.text;
    link2.text = link1.text;
    link1.text = link3;
    return false;
  };
  currentImage.onclick = inc;
  next.onclick = inc;
  prev.onclick = function () {
    counter--;
    if (counter == 0) {
      counter = 12;
    }
    if (counter == 1)
      prev.style.visibility = 'hidden';
    document.getElementById('currentImage').src = gensource(counter, album);
  };
});