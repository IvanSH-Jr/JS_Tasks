/*Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый).
А также вызови внутри своей функции, функцию из прошлого задания*/
import { yearRange } from './personYears.js'
const getPersonYear = (personName, personAge) => {
    yearRange()
    return  (personAge >= 1 && personAge <= 17 ) ? `${personName}, возраст - ${personAge} - ребенок`
            :((personAge >= 18 && personAge <= 30 )) ? `${personName}, возраст - ${personAge} - молодой`
            :((personAge > 30 && personAge <= 55 )) ? `${personName}, возраст - ${personAge} - зрелый`
            :((personAge > 55)) ? `${personName}, возраст - ${personAge} - старый`
            : 'Нет данных'
}

console.log(getPersonYear('Андрей', 45))