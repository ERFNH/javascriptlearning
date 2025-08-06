let count = 0

const zero = document.querySelector("#zero")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const allbutton = e.currentTarget.classList
        if (allbutton.contains('decrease')) {
            count--
        }
        else if (allbutton.contains('increase')) {
            count++
        }
        else {
            count = 0
        }
        if (count > 0) {
            zero.style.color = "green"
        }
        else if (count < 0) {
            zero.style.color = 'red'
        }
        else {
            zero.style.color = 'black'
        }
        zero.textContent = count
    })
});
