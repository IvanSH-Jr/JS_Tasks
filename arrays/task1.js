/*Сделай функцию, которая принимает массив любых целых чисел, которая возращает истинну, 
если все элементы четные, если бы хотя бы один элемент не четный, то false. */
const arrOdd = [2,2,3,4,5,6,7,8,9,10,11,12]
const arrEven = [46,44,22,20,10,14,100]
const evenCheck = (arr) => {
    for(let el = 0; el < arr.length; el++){
        if((arr[el] % 2) != 0){
            return 'False'
        }
    }
    return 'True'
}

console.log(evenCheck(arrEven))