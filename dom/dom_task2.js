/* Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом "test@email.ru"*/

const btn = document.createElement('button')
const input = document.createElement('input')
const body = document.querySelector('body')

btn.textContent = 'Заполнить'
body.insertAdjacentElement('afterbegin', btn)
body.insertAdjacentElement('afterbegin', input)

btn.addEventListener('click', (e) => {
    if(e.currentTarget){
        input.value = 'test@email.ru'
    }
})
