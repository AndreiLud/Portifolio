function fotog(imageUrl) {
    var fotog = document.getElementById("fotog");
    var img = fotog.querySelector("img");
    img.src = imageUrl;
    fotog.classList.add("show");
}
function fechar() {
    var fotog = document.getElementById("fotog");
    fotog.classList.remove("show");
}