console.log(`Discord: ! Mario#9999`)

document.addEventListener("click", musicPlay);
function musicPlay() {
    var song = document.getElementById("song");
    song.volume = 1;
    song.play();

    document.removeEventListener("click", musicPlay);
}
