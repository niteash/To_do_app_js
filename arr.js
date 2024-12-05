let student = ['shwe win aung','nikki','aztec', 'yan rui', 'gauri' ]

console.log(student)
console.log("This is lenght  :",student.length)
console.log("This is type  :",typeof(student))

let info = ['shwe win aung', 23, 8];

console.log(info);
console.log(info[0][0]);//method chaining
console.log(typeof(info))

// arrays are mutable : it means array values can be changed

let fruits = ['banana','apple','watermelon'];
console.log(fruits);
console.log(fruits[0]); //banana
console.log(fruits[0] = 'mango');
console.log(fruits[0]); //mango
console.log(fruits);

let cars = ['bmw','toyota','audi','masarati'];
console.log(cars);
//push : add to end
console.log(cars.push('suzuki'));
console.log(cars);

console.log(cars.push('Rolls Royce'));
console.log(cars);

//pop : delete from end and return it
console.log(cars.pop())
console.log(cars);

//unshift : add to start

console.log(cars.unshift('maruti'))
console.log(cars);

//shift : delete from start and return it

console.log(cars.shift());
console.log(cars);


//given array 

// let months = ['janurary','july','march','august'];
//to change

// let months = ['july','june','march','august']

let months = ['janurary','july','march','august']

console.log(months.shift());
console.log(months);
console.log(months.shift());

// console.log(months.unshift('june')[2]);
console.log(months.unshift('june'));
console.log(months.unshift('july'));


console.log(months)

//indexOf : tell the index number of value
//include : tell that the value is exist or not
let color = ['white','black','blue','brown'];

console.log(color.indexOf('white'));
console.log(color.includes('white')); //true
console.log(color.includes('gold')); //false


//concat = combine two seperate files

let arr1 = ['shirt','pant','hat'];
let arr2 = ['blackshirt','whitepant','goldhat'];
let oneArray = arr1.concat(arr2)
console.log(oneArray);

//reverse 


let reverse = ['one','two', 'three', 'four','five'];
console.log(reverse)
console.log(reverse.reverse());

console.log(reverse.slice(2));
console.log(reverse.slice(2,3));
console.log(reverse.slice(-2)); //start counting from last value



//splice (start,Count,item0,itemNum)

let count = ['one','two','three','four','five'];

let newCount = count.splice(0,1,'hundred','thousand');

console.log(count);

//sort = sort an array in ascending or descending

let numbers = [22,31,35,65,56,78,1,45,54];

console.log(numbers);
console.log(numbers.sort());

//array reference
let arrOriginal = ['a','b']
let arrCopy = arrOriginal;

console.log(arrCopy)
arrCopy.push('c');
console.log(arrCopy)
console.log(arrOriginal)
arrCopy === arrOriginal


//multidimensional array

let nestedArray = [[0,1],[2,3],[4,5]];
console.log(nestedArray)

let twoDArray = [['X',null,'O'], [null,'X',null],['O',null,'X']];
console.log(twoDArray)













