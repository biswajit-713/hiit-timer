var repetition = 6;
var globalTimer = 30;
var sound;

function playAudio(sound) {
    if (!sound) {
        sound = new Audio("./audio-files/sound.wav");
    }
    sound.play();
}

function runRepetition() {
    document.getElementById('trigger').textContent = 'RUNNING';
    document.getElementById('trigger').disabled = true;
    repetition--;

    var timer = globalTimer;
    (function runTimer() {
        document.querySelector('.container-text').textContent = formatTimer(timer);
        timer--;

        if (timer < 5) {
            playAudio(sound);
        }

        if (timer > 0) {
            setTimeout(runTimer, 1000);
        }
    })(timer);

    if (repetition > 0) {
        setTimeout(runRepetition, globalTimer*1000);
    } else {
        document.querySelector('.container-text').textContent = '';
        document.getElementById('trigger').textContent = 'START';
        document.getElementById('trigger').disabled = false;
    }
}

function formatTimer(timerValue) {
    return '00:' + `0${timerValue}`.slice(-2);
}


document.getElementById('trigger').addEventListener('click', event => {
    setTimeout(runRepetition, 2000);
});