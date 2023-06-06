/*
Проверка URL на валидность. Передаем урл функции и проверяем валидное оно или нет (возращаем тру или фолс). 
Критерии: Урл должен начинаться с http:// и/или https:// и заканчиваться на .php или .html. 
Например - http://site.ru/index.php - валидный, http://site.com - не валидный, site.ru/index.php - не валидный
*/

function validateUrl(url) {

    const urlRegex = /^http(s)?:\/\/(\w+\.)php|html/g
    return urlRegex.test(url);
  
}
let url = 'https://awdawd.php'
if(validateUrl(url)){
    console.log("Валиден!")
}else{
    console.log("Невалиден!")
}