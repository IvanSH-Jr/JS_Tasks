/*
Написать функцию, которая принимает массив сотрудников, 
каждый сотрудник имеет имя и возраст ([{name: 'Иван', age: 23},...]) и возвращает массив, 
где каждый элемент представляет из себя строку "Имя: Иван, возвраст: 23".
*/

const users = [
    {
        name: 'Test1',
        age: 10
    },
    {
        name: 'Test2',
        age: 20
    },
    {
        name: 'Test3',
        age: 30
    },
    {
        name: 'Test4',
        age: 40
    },
    {
        name: 'Test5',
        age: 50
    },
    {
        name: 'Test6',
        age: 60
    },
    {
        name: 'Test7',
        age: 70
    },
    {
        name: 'Test8',
        age: 80
    },
    {
        name: 'Test9',
        age: 90
    },
    {
        name: 'Test10',
        age: 100
    }
]

const userStr = (arr) => {
    const result1 = []
    const result2 = []
    //1
    arr.forEach(el => result1.push(`Name: ${el.name}, age: ${el.age}`))
    //2
    for(let key in arr){
        result2.push(`Name: ${arr[key].name}, age: ${arr[key].age}`)
    }
    return [result1, result2]
}
console.log(userStr(users))