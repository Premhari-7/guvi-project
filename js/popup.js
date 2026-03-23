function showPopup(message) {

    let popup = document.getElementById("popup");

    popup.innerText = message;
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 2000);
}