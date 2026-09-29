const loveButton = document.getElementById("loveButton");
const loveMessage = document.getElementById("loveMessage");

loveButton.addEventListener("click", () => {
    loveMessage.classList.remove("hidden");
    loveButton.style.display = "none";
});

function showHomeIntro() {
    loveMessage.classList.add("hidden");
    loveButton.style.display = "inline-block";
}

function showGallery() {
    document.getElementById("homePage").classList.add("hidden");
    document.getElementById("galleryPage").classList.remove("hidden");
}

function showHome() {
    document.getElementById("galleryPage").classList.add("hidden");
    document.getElementById("homePage").classList.remove("hidden");

    loveMessage.classList.remove("hidden");
    loveButton.style.display = "none";
} 