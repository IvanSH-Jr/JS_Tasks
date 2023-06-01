/*Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок,
18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 - зрелый*/ 

const yearRange = () =>{
    for(let year = 1; year <= 100 ; year++){

        if( year >= 1 && year <= 17 ) console.log(year + ' - ребёнок')
        if( year >= 18 && year <= 30 ) console.log(year + ' - молодой')
        if( year > 30 && year <= 55 ) console.log(year + ' - зрелый')
        if( year > 55 ) console.log(year + ' - старый')

    }  
}

export {yearRange};
