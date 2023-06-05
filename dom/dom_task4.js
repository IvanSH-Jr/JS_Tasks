/*Выводим кнопку с текстом "Поменять" и два инпута, при клике на кнопку инпуты меняются своим введеным текстом */

const btn = document.createElement('button')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
const body = document.querySelector('body')

btn.textContent = 'Показать'
input1.placeholder = input2.placeholder = 'Введите любой текст'
body.insertAdjacentElement('afterbegin', input1)
body.insertAdjacentElement('afterbegin', btn)
body.insertAdjacentElement('afterbegin', input2)

btn.addEventListener('click', () => {
    let replacer = ''
    if(input1.value && input2.value){
        replacer = input1.value
        input1.value = input2.value
        input2.value = replacer
    }else{
        alert('Пусто')
    }
})