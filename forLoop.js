// let greeting = "hello";

// for(i = 0; i <= greeting.length; i++){
//     console.log(greeting + i)
// }

//print odd number
for(let i=1; i<= 15; i =  i+2){
    console.log(i)
}

console.log("backward")

for(let i = 15; i>= 1; i= i - 2){
    console.log(i)
}

//print even number

console.log("Even Number")

for(let i = 0; i <= 20; i = i+2){
    console.log(i)
}

console.log("backward")

for (let i = 20; i>=0; i = i-2){
    console.log(i)
}


//5 time multiplication
console.log("5 times multiplication")
for (let i = 5; i <= 50; i= i+5){
    console.log(i)
}

//dynamic loop
// console.log("dynamic loop")

// let num = parseInt(prompt("Write your number : "));

// for (let i = num; i <= num*10; i= i+num){
//     console.log(i)
// }

//nested for loop
console.log("nested for loop")

for (let i = 1; i <= 3; i++ ){
    console.log("outerloop"+i)
    for(let j = 1; j <=3; j++){
        console.log(j)
    }
}