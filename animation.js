function animateText() {
    let text = document.querySelector(".welcome-text");
    text.style.transition = "transform 0.5s ease-in-out, color 0.5s";
    text.style.transform = "scale(1.2)";
    text.style.color = "#ffcc00";

    
    setTimeout(() => {
        text.style.transform = "scale(1)";
        text.style.color = "#ff69b4";
    }, 500);
}
