/*
Вывести любой квадрат и кнопку "скрыть квадрат". 
Когда мы нажимаем на скрыть, квадрат исчезает и 
текст кнопки меняется на "показать квадрат" и 
так можно кликать сколько угодно раз.
*/
const body = document.querySelector('body')
body.style.display = 'flex'
body.style.alignItems = 'center'
body.style.justifyContent = 'center'
const div = document.createElement('div')
div.style.width = '300px'
div.style.height = '300px'
div.style.border = '3px solid'
div.style.backgroundColor = 'red'
div.style.display = 'block'
div.style.marginLeft = '20px'
const btn = document.createElement('button')
btn.textContent = 'Скрыть квадрат'

body.insertAdjacentElement('afterbegin', div)
body.insertAdjacentElement('afterbegin', btn)
btn.addEventListener('click', (e) => {
    if(div.style.display === 'block'){
        div.style.display = 'none'
        btn.textContent = 'Показать квадрат'
    }else{
        div.style.display = 'block'
        btn.textContent = 'Скрыть квадрат'
    }
})