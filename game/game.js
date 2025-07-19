let userturn = ''

let userScore = Number(Cookies.get('userScore')) || 0
let systemScore = Number(Cookies.get('systemScore')) || 0
document.querySelector('.userscore').innerHTML = userScore;
document.querySelector('.systemscore').innerHTML = systemScore;

function rock() {
    userturn = 'rock'
    document.querySelector('.userturn').innerHTML = 'rock'
}

function paper() {
    userturn = 'paper'
    document.querySelector('.userturn').innerHTML = 'paper'
}

function scissors() {
    userturn = 'scissors'
    document.querySelector('.userturn').innerHTML = 'scissors'
}

const choices = ['rock', 'paper', 'scissors']
function system() {
    const index = Math.floor(Math.random() * choices.length)
    const choice = choices[index]
    document.querySelector('.systemturn').innerHTML = choice
    return choice;
}

function Move(choice) {
    Cookies.set('userChoice', choice)
    document.querySelector('.userturn').innerHTML = choice
}

function systemm() {
    const userChoice = Cookies.get('userChoice')
    const systemChoice = system()
    document.querySelector('.systemturn').innerHTML = systemChoice
    if (userChoice === systemChoice) {
    } else if (
        (userChoice === 'rock' && systemChoice === 'scissors') ||
        (userChoice === 'paper' && systemChoice === 'rock') ||
        (userChoice === 'scissors' && systemChoice === 'paper')
    ) {
        userScore++;
        document.querySelector('.userscore').innerHTML = userScore;
        Cookies.set('userScore', userScore)
    } else {
        systemScore++;
        document.querySelector('.systemscore').innerHTML = systemScore;
        Cookies.set('systemScore', systemScore)
    }
}

function restart() {
    userScore = 0;
    systemScore = 0;
    Cookies.set('userScore', userScore);
    Cookies.set('systemScore', systemScore);
    Cookies.set('userChoice', '');

    document.querySelector('.userturn').innerHTML = 'user';
    document.querySelector('.systemturn').innerHTML = 'system';
    document.querySelector('.userscore').innerHTML = userScore;
    document.querySelector('.systemscore').innerHTML = systemScore;
}
