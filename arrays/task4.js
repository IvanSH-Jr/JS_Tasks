/*Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] 
и функция возращает среднее арифметическое, (округлить результат до десятых) */
const testArr = [1,2,5,12,15,21,40,1000,1010,2334,958, 3, 3, 98, 77]
const averageValue = (arr) =>{
    let average = 0
    for(let el = 0; el < arr.length; el++){
        average += arr[el]
    }
    //toFixed возвращает строку, поэтому ставим унарный плюс, чтобы преобразовать в Number!
    return +(average/arr.length).toFixed(1)
}
console.log(averageValue(testArr))