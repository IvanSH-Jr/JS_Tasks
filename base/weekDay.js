const days = {
    0: 'Воскресенье',
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',

}
const weekDay = (dayNumber) => {
    console.log(isNaN(dayNumber))
    return (isNaN(dayNumber)) ? 'Ввели не число' : (dayNumber >= 0 && dayNumber <= 6) ? days[dayNumber] :  'Ввели число не от 0 до 6!' 
}

console.log(weekDay(5))