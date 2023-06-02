/*
У нас есть объект, в котором хранятся зарплаты нашей команды
Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
Если объект salaries пуст, то результат должен быть 0.
*/
const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for(let values in salaries){
    if(salaries[values] >= 0)sum += salaries[values]
}
console.log(sum)