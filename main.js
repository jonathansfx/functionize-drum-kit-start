// DRUM KIT (Modified Wes Bos JS30 Challenge)
let 


// Listen for key events on the page
document.addEventListener("keydown", processKeyDown);

// Event Function
function processKeyDown(e) {
  console.log(e.code);

  if (e.code === "KeyA") {
    // Play A-Clap
    playKey("A", "clap");
  } else if (e.code === "KeyS") {
    // Play S-hihat
    playKey("S", "hihat");
  } else if (e.code === "KeyD") {
    // Play D-kick
    playKey("D", "kick");
  } else if (e.code === "KeyF") {
    // Play F-Openhat
    playKey("F", "openhat");
  } else if (e.code === "KeyG") {
    // Play G-Boom
    playKey("G", "boom");
  } else if (e.code === "KeyH") {
    // Play H-Ride
    playKey("H", "ride");
  } else if (e.code === "KeyJ") {
    // Play J-Snare
    playKey("J", "snare");
  } else if (e.code === "KeyK") {
    // Play K-Tom
    playKey("K", "tom");
  } else if (e.code === "KeyL") {
    // Play L-Tink
    playKey("L", "tink");
  }
}

// Add transition end listeners
document.getElementById("A").addEventListener("transitionend", removePlaying);
document.getElementById("S").addEventListener("transitionend", removePlaying);
document.getElementById("D").addEventListener("transitionend", removePlaying);
document.getElementById("F").addEventListener("transitionend", removePlaying);
document.getElementById("G").addEventListener("transitionend", removePlaying);
document.getElementById("H").addEventListener("transitionend", removePlaying);
document.getElementById("J").addEventListener("transitionend", removePlaying);
document.getElementById("K").addEventListener("transitionend", removePlaying);
document.getElementById("L").addEventListener("transitionend", removePlaying);

// Transition End Function
function removePlaying(event) {
  event.target.classList.remove("playing");
}



function playKey(key, sound) {
  let audio = document.getElementById(`${sound}`);
  audio.currentTime = 0;
  audio.play();
  document.getElementById(`${key}`).classList.add("playing");
}
