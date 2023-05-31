const gender = (yourGender) => {
    return yourGender === 'M' ? 'Ваш пол мужской' : yourGender === 'F' ? 'Ваш пол женский' : 'Ваш пол неопределен'
}

console.log(gender('M'))