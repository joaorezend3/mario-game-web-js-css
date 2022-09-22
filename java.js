const mario = document.querySelector(".mario"); // add class css
const pipe = document.querySelector(".pipe"); // add class css
const nuvem = document.querySelector(".nuvem"); // add class css
const restart = document.querySelector(".btn-restart"); // add class css

function jump() {
  mario.classList.add("jump");
  setTimeout(function () {
    mario.classList.remove("jump");
  }, 500);
}

document.addEventListener("keydown", jump);

// on verification > game over
const loop = setInterval(function () {
  const positionPipe = pipe.offsetLeft;
  const positionNuvem = nuvem.offsetLeft;
  const positionMario = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  if (positionPipe < 120 && positionPipe > 0 && positionMario < 80) {
    //stop animation pipe
    pipe.style.animation = "none";
    pipe.style.left = `${positionPipe}px`;
    //stop animation mario
    mario.style.animation = "none";
    mario.style.bottom = `${positionMario}px`;
    // death mario
    mario.src = "game-over.png";
    mario.style.width = "70px";
    // stop animation nuvem
    nuvem.style.animation = "none";
    nuvem.style.left = `${positionNuvem}px`;

    restart.style.display = "block";
    clearInterval(loop);
  }
}, 10);
