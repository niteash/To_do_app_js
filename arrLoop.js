// let fruits = ['mango','apple', 'watermelon','papaya','pineapple'];

// for (let i = 0; i <= fruits.length; i++){
//    document.write(`<br></br>`,fruits[i])
// }

// // nested array

// let heroes = [['ironman','spiderman','thor'],['superman','wonderwomen','flash']];

// console.log(heroes)

// for (let i = 0; i < heroes.length; i++){
//     console.log('list' + i)
//     for(let j = 0; j < heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }

//for of

// for (hero of heroes){
//     console.log(hero)
// }

// for (char of "ShweWinAung"){
//     console.log(char)
// }

// //nested for of loop

// for (list of heroes){
//     // console.log(list)
//     for (individual of list){
//         console.log(individual)
//     }
// }

let todo = [];

let req = prompt("Enter the request : ");


while(true){
    if(req == "quit"){
        console.log("quiting App");
        break;
    }

    if(req == "list"){
        console.log("---------------")
       for(let i = 0 ; i<= todo.length; i++){
            console.log(i , todo[i])
       }
         console.log("---------------");
    }else if (req == "add"){
        let task = prompt("Enter task you want to add")
        todo.push(task);
        console.log("Task added")

    }else if (req == "delete"){
        let index = prompt("Enter task index you want to delete: ")
            todo.splice(index,1);
            console.log("Task is delete")
    } else {
        console.log("wrong request!")
    }
     req = prompt("Enter the request : ");

}