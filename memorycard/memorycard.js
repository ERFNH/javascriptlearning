let list = []

window.onload = function () {
    let saved = Cookies.get('listt');
    if (saved) {
        list = JSON.parse(saved)
        cardspart()
    }
};

document.querySelector('.form').addEventListener('submit', function (e) {
    e.preventDefault()
    let country = document.querySelector('.country').value.trim()
    let capital = document.querySelector('.capital').value.trim()

    let listt = { country, capital }
    list.push(listt)
    let string = JSON.stringify(list)
    Cookies.set('listt', string)
    cardspart()
    document.querySelector('.country').value = ''
    document.querySelector('.capital').value = ''
});

function cardspart() {

    const container = document.querySelector('.cards-container')
    container.innerHTML = ''
    list.forEach((item, index) => {
        const container = document.querySelector('.cards-container')
        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML = `country: ${item.country}<br>capital: ${item.capital}`

        let deletebuton = document.createElement('button')
        deletebuton.textContent = 'delete'
        deletebuton.onclick = function () {
            list.splice(index, 1)
            Cookies.set('listt', JSON.stringify(list))
            cardspart()

        };

        let editbuton = document.createElement('button')
        editbuton.textContent = 'edit'
        editbuton.classList.add('editbutton')
        editbuton.onclick = function () {
            document.querySelector('.country').value = item.country
            document.querySelector('.capital').value = item.capital
            list.splice(index, 1)
            Cookies.set('listt', JSON.stringify(list))
            cardspart()
        };
        div.appendChild(editbuton)
        div.appendChild(deletebuton)
        container.appendChild(div)
    });

}
