var video = document.getElementById("video"),
    button = document.getElementById("play-button");
button.addEventListener("click", function() {
        if (video.paused){
            video.play();
        }
        else {
            video.pause();
        }
}, false);