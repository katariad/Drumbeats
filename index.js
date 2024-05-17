let drumlist = document.querySelectorAll(".drum").length;
// when button pressed
for (let i = 0; i < drumlist; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let htmlbutton = this.innerHTML;

    makeSound(htmlbutton);
    addstyle(htmlbutton);
  });
}
// keyboard event
document.addEventListener("keypress", function (event) {
  makeSound(event.key);
  addstyle(event.key);
});

function addstyle(key) {
  document.body.classList.add("bg-back");
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(() => {
    document.querySelector("." + key).classList.remove("pressed");
    document.body.classList.remove("bg-back");
  }, 200);
}

// main function
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "k":
      var kick = new Audio("sounds/crash.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      var worng = new Audio("sounds/Netflix.mp3");
      worng.play();
      alert("Wrong key press");
      setTimeout(() => {
        document.body.classList.remove("bg-back");
      }, 200);
  }
}
