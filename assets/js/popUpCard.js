function togglePopup(popupId) {
  let popup = document.getElementById(popupId);
  let overlay = document.getElementById("overlay");
  if (popup.style.display === "block") {
    popup.style.display = "none";
    overlay.style.display = "none";
  } else {
    popup.style.display = "block";
    overlay.style.display = "block";
  }
}