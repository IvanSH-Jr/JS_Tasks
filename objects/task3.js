/*Написать объект ladder - объект, который позволяет подниматься вверх и спускаться. Пример работы должен быть таким:
ladder.showStep(); // 0 (выводит ступеньку на который мы находимся)
ladder.up(); 
ladder.up();
ladder.showStep(); // 2
ladder.down();
ladder.showStep(); // 1
*/

const ladder = {
    yourStep: 0,
    showStep(){
        console.log(this.yourStep)
        return this
    },
    up(){
        this.yourStep++
        return this
    },
    down(){
        this.yourStep--
        return this
    }
}
/*
ladder.showStep()
ladder.up()
ladder.up()
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.down()
ladder.showStep()
*/
ladder.up().up().showStep()