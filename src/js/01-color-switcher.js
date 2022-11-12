const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.body,
}

refs.start.addEventListener('click', onStart)
refs.stop.addEventListener('click', onStop)

let timerId = null;

function onStart () {
    const timer = setInterval(changeColor, 1000)
    timerId = timer
    refs.start.disabled = true;
}

function changeColor () {
    refs.body.style.backgroundColor = getRandomHexColor()
}

function onStop () {
    clearInterval(timerId)
    refs.start.disabled = false;

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
