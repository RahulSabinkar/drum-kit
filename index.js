document.querySelectorAll(".drum").forEach((item) => {
  item.addEventListener("click", () => {
    var whichButton = item.innerHTML;
    handler(whichButton);
  });
})

document.addEventListener("keydown", (event) => {
  var whichKey = event.key;
  handler(whichKey);
})

function handler(whichButton) {
  makeSound(whichButton);
  buttonAnimation(whichButton);
}

function makeSound(whichSound) {
  switch (whichSound) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      break;
  
    default:
      console.log(whichSound);
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}