const Mario = document.querySelector('.Mario');
const pipe = document.querySelector('.pipe');

const jump = () => {
    Mario.classList.add('jump');

    setTimeout(() =>{
        Mario.classList.remove('jump');
    },500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(Mario).bottom.replace('px','');

    if(pipePosition <= 135 && pipePosition >0 && marioPosition <= 139) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`

        Mario.style.animation = 'none';
        Mario.style.bottom = `${marioPosition}px`

        Mario.src = './img/game-over.png';
        Mario.style.width = '75px';
        Mario.style.marginLeft = '50px';

        clearInterval(loop);
    }

},10)

document.addEventListener('keydown', jump);