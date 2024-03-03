document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector("video");
    var playStopButton = document.getElementById("ctl00_PlaceHolderContent_playStop");
    var soundOnOffButton = document.getElementById("ctl00_PlaceHolderContent_soundOnOff");

    playStopButton.addEventListener("click", function() {
        if (video.paused || video.ended) {
            video.play();
            playStopButton.textContent = "Pause";
            playStopButton.classList.add("active");
            playStopButton.style.backgroundImage = "url(img/pause.png)";
        } else {
            video.pause();
            playStopButton.textContent = "Play";
            playStopButton.classList.remove("active");
            playStopButton.style.backgroundImage = "url(img/play.png)";
        }
    });

    soundOnOffButton.addEventListener("click", function() {
        if (video.muted) {
            video.muted = false;
            soundOnOffButton.textContent = "Sound Off";
            soundOnOffButton.classList.remove("active");
            soundOnOffButton.style.backgroundImage = "url(img/soundOn.png)";
        } else {
            video.muted = true;
            soundOnOffButton.textContent = "Sound On";
            soundOnOffButton.classList.add("active");
            soundOnOffButton.style.backgroundImage = "url(img/soundOff.png)";
        }
    });

    // 초기화
    updateButtonState();

    function updateButtonState() {
        if (video.paused || video.ended) {
            playStopButton.textContent = "Play";
            playStopButton.classList.remove("active");
            playStopButton.style.backgroundImage = "url(img/play.png)";
        } else {
            playStopButton.textContent = "Pause";
            playStopButton.classList.add("active");
            playStopButton.style.backgroundImage = "url(img/pause.png)";
        }

        if (video.muted) {
            soundOnOffButton.textContent = "Sound On";
            soundOnOffButton.classList.add("active");
            soundOnOffButton.style.backgroundImage = "url(img/soundOff.png)";
        } else {
            soundOnOffButton.textContent = "Sound Off";
            soundOnOffButton.classList.remove("active");
            soundOnOffButton.style.backgroundImage = "url(img/soundOn.png)";
        }
    }
});
