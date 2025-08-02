const simplebutton = document.getElementById('simplebutton')
const colors = ['#FF6347', 'green', '#AFEEEE', '#FAFAD2']
const simplecolor = document.querySelector('.simplecolor')
const simpleDiv = document.querySelector('.simple');
simplebutton.addEventListener('click', function () {
    const randomnumber = getRandomNumberSimple()
    simpleDiv.style.backgroundColor = colors[randomnumber]
    simplecolor.textContent = colors[randomnumber]
})
function getRandomNumberSimple() {
    return Math.floor(Math.random() * colors.length)
}


const hexbutton = document.getElementById('hexbutton')
const colorss = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D']
const hexcoolor = document.querySelector('.hexcoolor')
const hexDiv = document.querySelector('.hex');
hexbutton.addEventListener('click', function () {
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorss[getRandomNumberHex()];
    }
    hexDiv.style.backgroundColor = color;
    hexcoolor.textContent = color;
});
function getRandomNumberHex() {
    return Math.floor(Math.random() * colorss.length)
}
