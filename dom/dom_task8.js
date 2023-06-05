/*
Вывести 4 красных квадрата, при клике на любой, он становиться зеленым, при этом если есть уже зеленый квадрат, 
то он становиться обратно красным и так можно кликать на любой квадрат, он становиться зеленым, 
а старый зеленый квадрат обратно крассным и тд. 
(Сделать задачу так, чтобы можно было добавить ещё хоть 100 квадратов при этом скрипт не надо менять).
 */
const body = document.querySelector('body')
body.style.display = 'flex'
body.style.flexWrap = 'wrap'
const blockCreator = (numberOfBlocks) =>{
    if(typeof(numberOfBlocks) === 'number' && numberOfBlocks > 0){
        for(let count = 1; count <= numberOfBlocks; count++){
            body.insertAdjacentElement('afterbegin', document.createElement('div'))
        }
        const divEl = document.querySelectorAll('div')
        divEl.forEach(el => {
            el.style.width = '200px'
            el.style.height = '200px'
            el.style.border = '2px solid'
            el.style.margin = '10px '
            el.style.backgroundColor = 'red'
            el.addEventListener('click', (e) =>{
                if(e.currentTarget.style.backgroundColor == 'red'){
                    divEl.forEach(block =>{
                        block.style.backgroundColor = 'red'
                    })
                    el.style.backgroundColor = 'green'
                }else if(e.currentTarget.style.backgroundColor = 'green'){
                    el.style.backgroundColor = 'red'
                }
            })  
        })
    }
}
let blocks = +prompt('Введите число квадратов:', 1)

blockCreator(blocks)