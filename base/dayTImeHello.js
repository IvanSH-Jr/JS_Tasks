/*Написать функцию, которой передаем имя, и она возраващает приветствие в зависимости от времени суток (Доброе утро\день\вечер\ночи Иван)*/ 

const dayTimeHello = (userName) => {
    
    return  ((new Date).getHours() > 4 && (new Date).getHours() < 12) ? `Доброе утро, ${userName}!` 
            : ((new Date).getHours() >= 12 && (new Date).getHours() < 16) ? `Добрый день, ${userName}!`
            : ((new Date).getHours() >= 16 && (new Date).getHours() <= 24) ? `Добрый вечер, ${userName}!`
            : ((new Date).getHours() > 24 && (new Date).getHours() <= 4) ? `Доброй ночи, ${userName}!`
            : 'Какое-то не то время!)'
}

console.log(dayTimeHello('Иван'))