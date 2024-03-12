function changeTabTitle() {

    if (document.visibilityState === 'hidden') {

        document.title = "| Volte para gente 😞!";
    } else {

        document.title = "| DevSea & Co.";
    }
}
document.addEventListener('visibilitychange', changeTabTitle);
