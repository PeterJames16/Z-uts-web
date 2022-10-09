var tm_pilihstory = document.getElementById("pilihstory");
var file = document.getElementById("file");
tm_pilihstory.addEventListener("click", function () {
  file.click();
});
file.addEventListener("change", function () {
  gambar(this);
});
function gambar(a) {
  if (a.files && a.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("gambar").src = e.target.result;
    };
    reader.readAsDataURL(a.files[0]);
  }
}

var tm_pilihpost = document.getElementById("pilihpost");
var file = document.getElementById("file");
tm_pilihpost.addEventListener("click", function () {
  file.click();
});
file.addEventListener("change", function () {
  gambar(this);
});
function gambar(a) {
  if (a.files && a.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("gambar").src = e.target.result;
    };
    reader.readAsDataURL(a.files[0]);
  }
}

var tm_pilihvideo = document.getElementById("pilihvideo");
var file = document.getElementById("file");
tm_pilihvideo.addEventListener("click", function () {
  file.click();
});
file.addEventListener("change", function () {
  gambar(this);
});
function gambar(a) {
  if (a.files && a.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("gambar").src = e.target.result;
    };
    reader.readAsDataURL(a.files[0]);
  }
}