addEventListener("keydown", (event) => {
    event.preventDefault();
    let keyPressed = document.querySelector(`#${event.code}`)
    keyPressed.style.backgroundColor = "#72fc97";
    keyPressed.classList.remove("keypress");
    void keyPressed.offsetWidth;
    keyPressed.classList.add("keypress");
});