const drumLength = document.querySelectorAll('.drum').length;

// Handle mouse clicks
for (let i = 0; i < drumLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function () {
        makeNoise(this.innerHTML);
        animatingButtons(this.innerHTML);
    });
}

// Handle keyboard key presses
document.addEventListener("keydown", function(event) {
    makeNoise(event.key);
    animatingButtons(event.key);
});

// Function to play appropriate sound
function makeNoise(key) {
    switch (key) {
        case "w":
            new Audio("sounds/tom1.mp3").play();
            break;
        case "a":
            new Audio("sounds/tom2.mp3").play();
            break;
        case "s":
            new Audio("sounds/tom3.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom4.mp3").play();
            break;
        case "j":
            new Audio("sounds/clash.mp3").play();
            break;
        case "k":
            new Audio("sounds/snare.mp3").play();sounds/clash.mp3
            break;
        case "l":
            new Audio("sounds/kickbass.mp3").play();
            break;
        default:
            console.log("Invalid key: " + key);
    }
}

// Button animation
function animatingButtons(key) {
    const activeButton = document.querySelector(`.${key}`);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(() => {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}
