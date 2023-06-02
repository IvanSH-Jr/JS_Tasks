/*Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.*/
let menu = 
    {
        width: 200,
        height: 300,
        title: "My menu"
    }

const multiplyNumeric = () => {
    for(let value in menu){
        if(!(isNaN(menu[value]))){
            menu[value] *= 2
        }
    }
    return menu
}

console.log(multiplyNumeric(menu))
