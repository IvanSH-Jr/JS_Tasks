/* Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"*/
const btn = document.createElement('button')
const body = document.querySelector('body')
btn.textContent = 'Привет!'
body.insertAdjacentElement('afterbegin', btn)
btn.addEventListener('click', (e) => {
    alert('Привет Мир!')
})