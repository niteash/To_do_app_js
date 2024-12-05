// let pencilPrice = 10;
// let eraserPrice = 5;

// // let output = "The total price is : "+ (pencilPrice + eraserPrice)+ " Rupees. ";
// let result = `The total price is : ${pencilPrice + eraserPrice} Rupees.`;
// // console.log(output);
// console.log(result)

//conditional statement

// let age = 23;

// if(age >= 18){
//     console.log("You can get marriage life legally!")
// }else{
//     console.log("You cannot get marriage life legally!")

// }


// let color1 = "green";

// if(color1 == "red"){
//     console.log('This is red light, you have to stop here!')
// } else if(color1 == "yellow"){
//     console.log('This is yellow light, you have to slowdown speed!')
// }else{
//     console.log('This is green , you can go!')
// }

// let marks = 50;

// if( marks >= 80){
//     console.log(`A+`)
// }else if (marks >= 60){
//     console.log(`A`)

// }else if (marks >= 30){
//     console.log(`B`)
    
// }else if (marks < 30){
//     console.log("C")
// }

// let popSize = 'L';

// if(popSize == 'XL'){
//     console.log('The popcorn price : 250rs')
// }else if (popSize == 'L'){
//     console.log('The popcorn price : 200rs')

// }else if (popSize == 'M'){
//     console.log('The popcorn price : 100rs')

// }else{
//     console.log('The popcorn price : 50rs')

// }

// let color = 'green';

// switch(color){
//     case 'red':
//     console.log("It's red light, you have to stop!")
//     break;

//     case 'yellow':
//     console.log("It's yellow light, you have to slow down!")
//     break;

//     case 'green':
//     console.log("It's green light, you can go!")
//     break;

//     default : ("The light is not working!");
// }

// let days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
// let count = 1 

// let getPrompt = parseInt(prompt('Give some number 1 to 7 : '))

// switch(getPrompt){
//    case 1:
//    console.log('Its Monday!');
//    break;

//    case 2:
//    console.log('Its Tuesday!');
//    break;

//     case 3:
//     console.log('Its Wednesday!');
//     break;

//     case 4:
//         console.log('Its Thursday!');
//         break;

//     case 5:
//     console.log('Its Friday!');
//     break;

//     case 6:
//     console.log('Its Saturday!');
//     break;

//     case 7:
//     console.log('Its Sunday!');
//     break;

//     default : 'Its a Not weekday'
 
// }

// let firstName = prompt("Type your first name : ");
// let LastName = prompt("Type your Last name : ");

// console.log(firstName,"",LastName)


let msg = "         hello          ";

// let password = prompt("Type your password");
// let newPass = password.trim();

// console.log(newPass)
console.log(msg.trim())
console.log(msg.toLowerCase());
console.log(msg.toUpperCase())

let name = 'Shwe win aung'

// indexName = name.indexOf('Shwe') 
// indexName = name.indexOf('Win')
indexName = name.indexOf('aung')


console.log(indexName)


let MethodChaining = name.trim().toUpperCase();
console.log(MethodChaining)

let sliceString = name.slice(9,13);
console.log(sliceString)

let sliceStart = name.slice(5);
console.log(sliceStart)

//replace method

let annoucement = "I love ReactJS";
let newAn = annoucement.replace("love","do")
console.log(annoucement);
console.log(newAn)

//repeat

let title = "Nikki";
let repeatTitle = title.repeat(3);

console.log(repeatTitle)


//Practice Question
console.log("Practice Question")
let ask = 'help!'

let newAsk = ask.trim().toUpperCase();
console.log(newAsk);
 

let myName = "ApnaCollege";

console.log(myName.slice(4,9));
console.log(myName.indexOf("na"));
console.log(myName.replace("Apna","Our"))

let myNewName = myName.slice(4).replace("l","t");
console.log(myNewName.replace("l","t"))
