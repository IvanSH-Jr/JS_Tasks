/*
Реализовать калькулятор. Выводим 10 кнопок цифр от 0 до 10. 
Кнопки: умножить, поделить, сложить, вычесть, вычислить. 
При нажатии на кнопки в любом порядке выводиться в отдельном блоке строка (5-4+3*2...) 
и при нажатии на кнопку посчитать, заменяем в блоке данную строку на результат её вычисления, 
при этом можно потом дальше вычислять с уже этим вычеслением.
*/
const operators = ['-', '+', '*', '/']
const body = document.querySelector('body')
const input = document.createElement('input')

const div = document.createElement('div')
const countBtn = document.createElement('button')
countBtn.textContent = 'Вычислить'
countBtn.classList.add('result')
body.insertAdjacentElement('afterbegin', div)
div.insertAdjacentElement('afterbegin', input)
div.insertAdjacentElement('beforeend', countBtn)
for(let btn = 0; btn <= 10; btn++){
    const button = document.createElement('button')
    button.classList.add('calcBtn')
    button.textContent = btn
    div.appendChild(button)
}
for(let btn = 0; btn < operators.length; btn++){
    const operatorBtn = document.createElement('button')
    operatorBtn.textContent = operators[btn]
    operatorBtn.classList.add('calcBtn')
    div.appendChild(operatorBtn)
}
const values = []
let result = 0
const calcBtnValue = document.querySelectorAll('.calcBtn')
console.log(calcBtnValue)
calcBtnValue.forEach(btn =>{
    btn.addEventListener('click', () => {
        values.push(btn.textContent)
        input.value = result = values.join('')
    })
})
const showResult = document.querySelector('.result')
showResult.addEventListener('click', () => {
    input.value = eval(result)
    console.log(values)
})
