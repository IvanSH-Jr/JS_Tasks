/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/
let menu = 
    {
        width: 200,
        height: 300,
        title: "My menu"
    }
console.log(menu)
const multiplyNumeric = () => {
    for(let value in menu){
        if(typeof(menu[value]) === 'number'){
            menu[value] *= 2
        }
    }
}
multiplyNumeric(menu)
console.log(menu)
