document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("background-video");
  var content = document.querySelector(".content");

  video.addEventListener("canplay", function () {
    video.classList.add("blur");

    content.classList.add("visible");
  });
});
