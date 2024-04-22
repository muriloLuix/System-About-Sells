function togglePopup(popupId, overlayId) {
  let popup = document.getElementById(popupId);
  let overlay = document.getElementById(overlayId);
  if (popup && overlay) {
    if (popup.style.display === "block" || popup.style.display === "") {
      popup.style.display = "none";
      overlay.style.display = "none";
    } else {
      popup.style.display = "block";
      overlay.style.display = "block";
    }
  }
}
