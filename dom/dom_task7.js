/*
Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.
*/

const body = document.querySelector('body')
const div = document.createElement('div')
div.style.width = '300px'
div.style.height = '300px'
div.style.border = '3px solid'
div.style.backgroundColor = 'red'
div.style.transition = '1s all'
body.insertAdjacentElement('afterbegin', div)
div.addEventListener('mouseover', (e) =>{
    console.log('элемент, на который курсор перешёл', e.target)
    console.log('элемент, с которого курсор ушёл', e.relatedTarget)
    div.style.backgroundColor = 'green'
})
div.addEventListener('mouseout', (e) =>{
    console.log(e.target)
    console.log(e.relatedTarget)
    div.style.backgroundColor = 'red'
})