const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");
let allKeys = [],
audio = new Audio(`tunes/a.wav`); // by default, audio src is "a" tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
    clickedKey.classList.add("active"); // adding active class to the clicked key element
    setTimeout(() => { // removing active class after 150 ms from the clicked key element
        clickedKey.classList.remove("active");
    }, 150);
}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
    // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () => playTune(key.dataset.key));
});
const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}
const showHideKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
    // if the pressed key is in the allKeys array, only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key);
}
keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

document.addEventListener('keydown', (event) => {
    const key = document.querySelector(`.key[data-key="${event.key}"]`);

    if (!key) return; // If the key doesn't exist, do nothing

    // Handle special keys for GitHub and LinkedIn
    if (event.key === "git") {
        window.open("https://github.com/davidklee04", "_blank");
        return;
    }
    if (event.key === "link") {
        window.open("https://linkedin.com/in/david-lee-k", "_blank");
        return;
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const words = ["DAVID LEE", "ENGINEER", "MUSICIAN"];
    const flippingText = document.querySelector(".flipping-text");

    let index = 0;

    setInterval(() => {
        // Increment the index and reset if it exceeds the list length
        index = (index + 1) % words.length;

        // Temporarily hide the text to prevent flickering
        flippingText.style.opacity = 0;

        // Update the text after a short delay to sync with the flip animation
        setTimeout(() => {
            flippingText.textContent = words[index];
            flippingText.style.opacity = 1;
        }, 500); // Half the animation time
    }, 5000); // Change every 5 seconds
});

