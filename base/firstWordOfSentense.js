let testText = `
Ранее типы, используемые в параметре типа в defineProps и defineEmits, 
были ограничены локальными типами и поддерживали только литералы типов и интерфейсы. 
Это связано с тем, что Vue должен иметь возможность анализировать свойства интерфейса props для генерации соответствующих опций во время выполнения.`
const firstWords = (testText) => {
    let text = testText.split('.')
    let words = []
    for(let elem = 0; elem < text.length - 1; elem++){
        words.push(text[elem].match(/[\p{L}\p{Mn}\p{Nd}\p{Pc}']+/u)[0])
    }
    console.log(words.join(', '))
}

firstWords(testText)