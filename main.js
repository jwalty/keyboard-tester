addEventListener("keydown", (event) => {
    event.preventDefault();
    let keyPressed = document.querySelector(`#${event.code}`)
    keyPressed.style.backgroundColor = "#72fc97";
    keyPressed.classList.remove("keypress");
    void keyPressed.offsetWidth;
    keyPressed.classList.add("keypress");
    console.log(event);
});

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener("change", () => {
    updateKeypressColor() 
});


function updateKeypressColor() {
    document.documentElement.style.setProperty('--keypress-color', colorPicker.value);

}

updateKeypressColor() 