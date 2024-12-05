//whileloop
// let i = 1;
// while(i<=5){
//     console.log(i);
//     i++

// }

// console.log('backward');

// let i = 0;

// while(i<=20){
//     console.log(i)
//     i++;
// }

//favourite movie
let favourite  = "tom & jerry"
let guess = prompt("Guess my favourite movie: ");

while( guess != favourite){
    if (guess === "quit"){
        document.write("You decided to quit")
        break
    }
    guess = prompt("Wrong , Guess the movie again :")
    // console.log("Congratulation! Your Guess is right")
}

if(guess == favourite){
    document.write("Congratulation! Your Guess is right")
}

//break

let i = 1;

while (i <= 10){
    if(i == 3){
        break
    }
    console.log(i);
    i++
}