/*Выводим кнопку и инпут, в инпуте можно ввести любой текст и при нажатии на кнопку, 
выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле". */

const btn = document.createElement('button')
const input = document.createElement('input')
const body = document.querySelector('body')

btn.textContent = 'Показать'
input.placeholder = 'Введите любой текст'
body.insertAdjacentElement('afterbegin', btn)
body.insertAdjacentElement('afterbegin', input)

btn.addEventListener('click', () => {
    if(input.value){
        alert(`Вы ввели '${input.value}'`)
    }else{
        alert('Вы ничего не ввели в поле')
    }
})

