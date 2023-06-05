/*
Выводим две кнопки "заблокировать" и "разблокировать" и инпут. 
Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
*/

const btnBlock = document.createElement('button')
const btnUnBlock = document.createElement('button')
const input = document.createElement('input')
const body = document.querySelector('body')

btnBlock.textContent = 'Block'
btnUnBlock.textContent = 'Unblock'
input.placeholder = 'Text'
body.insertAdjacentElement('afterbegin', btnBlock)
body.insertAdjacentElement('afterbegin', btnUnBlock)
body.insertAdjacentElement('afterbegin', input)

btnBlock.addEventListener('click', () => {input.disabled = true})
btnUnBlock.addEventListener('click', () => {input.disabled = false})