/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/////////////////////////////////////////////////
// Array Methods
/////////////////////////////////////////////////

// SLICE  //
//we take a part of the array
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.slice(2)); // c , d ,e
//It does not manipulate the array but instead it creates a new array
//slice ( start (includes the element ) , end ( does not include the element ));
// just the array with the elements that was sliced ! IT DOES NOT CHANGE THE ORIGINAL ARRAY
// IF YOU WANT TO MANIPULATE THE ORIGINAL ARRAY TO DISQUALIFY FROM START TO END ELEMENTS THEN USE SPLICE
console.log(arr.slice(2, 4)); //[c , d ]
console.log(arr.slice(-2)); // [d , e]
console.log(arr.slice(-1)); //[] e ]
console.log(arr.slice(1, -2)); // [ b , c ]
console.log([...arr]); //copy the array into a new one
console.log(arr.slice()); // the same as destructuring the array it create a copy

// SPLICE //
//it mutates the array its changing the array itself
//console.log(arr.splice(2)) //[ c , d , e]
console.log(arr); // [ a , b] the other has been extracted
arr.splice(-1); //remove the last element of the array

// REVERSE  //
// it mutates the original array
let arr2 = ["j", "i", "h", "g", "j"];
//console.log(arr2.reserve());
console.log(arr2);

//  CONCAT  //
const letters = arr.concat(arr2);
console.log(letters);
// it combines two arrays into one
console.log([...arr, ...arr2]); // its actually the same a concat

//  JOIN    //
console.log(letters.join(" - "));
//return a string with -  j - i - h -g
const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));
//its the same both of them it return the first element
//lets say we want the last element but we dont know the length of the array
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
//we get a copy and we use -1 to get the last element
console.log(arr3.at(-1));
// -1 it count from the end ! -1 the last ELEMENT OF THE ARRAY
// .at method works also in Strings
console.log("george".at(-1));

//Looping over an array
//ForEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//deposits postive values
//withdrawals negative values
// user's movement
//for (const movement of movements) {
//i index
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

//  FOREACH //
//for each high order function so we need callback function
//loop over the array and in each iteration(επαν'αληψη) will execute this callback function
movements.forEach(function (movement, i, array) {
  //the order that argument the actual values passed in the callback function
  //as it call this callback function in each iteration it  will pass in the current element of the array as an argument
  //it will receive the current element of  the array as an argument

  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// . . .
//you cant use break in the forEach method

// SETS,MAPS AND FOR EACH
//
const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

//EACH ARRAY is an ENTRY which the first element is the KEY
// and the other one is the VALUE

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  console.log(map);
});
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
//SET ingore the double values in the array
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  //they key is the exact as the value
  //there is no reason for key to exist in the sets but they made it like this
  //the first one is the same as the second one value === key
});
//in javascript there are three major methods which can process data !
// Data transformations with MAP , FILTER , REDUCE
//  MAP  //
//LOOP OVER ARRAYS IT WORKS IN SIMILAR WAY LIKE FOR EACH BUT THE DIFFERENCE HERE IS
//THAT CREATES A NEW ARRAY BASED ON THE ORIGINAL ARRAY
// ex.
const array2 = [3, 1, 4, 3, 2];
const mapArray = array2.map((el) => el * 2);
console.log(mapArray);

//  FILTER    //
//filter elements in the original array
// Returns a new array based on the condition that we will set
// for example current > 2  in one array then the new filtered array will contain all the elements from the original
// array that is greater than 2

const filteredArray = array2.filter((e) => e > 2);

console.log(filteredArray); // Output: [3, 4, 3]

const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementUSD = movements1.map(function (mov) {
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementUSD);

//diffrent way of doing that without map
const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);
//functional programming with callbacks modern way for loop older way (irregular unction syntax)

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(mov)}`;
  // if (mov > 0 ){

  //   return `Movement ${i + 1}: You deposited ${mov}`;

  // }else{
  //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  //   }
});
console.log(movementsDescriptions);
//compute user name
//

//findindex method : returns the index of the found element not the element itself
//close account : delete object from the accounts
//delete element of the array splicemethod (in splice we need the index of the element)

//split returns an array
//console.log(username);

//filter method in practice

//filter = condition

//with filter method
const deposits = movements.filter(function (mov) {
  //create an array of the deposits
  //Deposits only the movements that are positive values in the array
  //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  return mov > 0; //only the array elements  for which this condition is true will make it to deposits array
});
console.log(deposits);

//with for loop
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawals);

//Reduce : we will use reduce to get the global balance of the account
//one value not an entire array
//first argument is the accumulator in the reduce
// accumulator -> snowball

const balance = movements.reduce(function (acc, curr, i, arr) {
  //ACC is like Sum // current sum of the previous values
  console.log(`iteration ${i} : ${acc}`);
  return acc + curr;
}, 0);

// iteration 0 : 0
// script.js:336 iteration 1 : 200
// script.js:336 iteration 2 : 650
// script.js:336 iteration 3 : 250
// script.js:336 iteration 4 : 3250
// script.js:336 iteration 5 : 2600
// script.js:336 iteration 6 : 2470
// script.js:336 iteration 7 : 2540

console.log(balance); //ALL REDUCED IN ONE VALUE
//we want starting at zero ( so the 0 is the first initial value )

//  ex   reduce //
// Maximum value of the movements array
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// 3000

//maximum value

const max = movements.reduce((acc, mov) => {
  //the acc will keep track
  if (acc > mov) {
    // console.log(acc);
    // console.log(mov);
    return acc;
  } else {
    // console.log(acc);
    // console.log(mov);
    return mov;
  }
}, movements[0]);
console.log(max);

///////////// coding challenge 2

// dogAge < = 2y : humanAge  = 2 * dogAge
// dogAge > 2y : humanAge = 16 + dogAge * 4

//exclude all the dogs which their age is lower than 18 human years

// const DogYears1 = [5, 2, 4, 1, 15, 8, 3];
// const DogYears2 = [16, 6, 10, 5, 6, 1, 4];
// const DogToHumanYears = function(DogYears) {
//    const h =  DogYears.map( (age) => {
//     if(age <= 2){
//       return age*2;
//     }else{
//       return 16 + age*4;
//     }
//   }).filter((age) =>
//     age >= 18
//   )
//   console.log(`Dog to human years `, h)
//   const average = h.reduce((acc, year, i, arr) =>
//   acc + year / arr.length , 0)
//   console.log(`The average human age of all adult dogs : ${average}`)
// }

// const DogYears = [DogYears1, DogYears2];

// DogYears.forEach( (DogYearData) => {
//     DogToHumanYears(DogYearData);
// })

///////////////////////////////////////////////////////////////////////
//challenge 3 Rewrite the DogTOHHumanYears in to arrow func
// const DogToHumanYears = DogYears =>  {
//     const h =  DogYears
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter((age) => age >= 18 )
//     .reduce((acc, year, i, arr) => acc + year / arr.length , 0)

//   console.log(`The average human age of all adult dogs : ${h}`)
// }

// const DogYears = [DogYears1, DogYears2];

// DogYears.forEach( (DogYearData) => {
//     DogToHumanYears(DogYearData);
// })

const totalDepositsUSD = movements
  .filter((mov) => mov > 0)
  .map((mov) => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
//reduce one result no array ! don't forget

//  FIND  METHOD //
//find method to retrieve one element from array based on condition
//find also accepts callback function which will then be called as the method loops over the array
//FIND LOOPS THE ARRAY BUT WITH THE DIFFERENCE THAT RETRIEVES ONE ELEMENT FROM THE ARRAY BASED ON ONE CONDITION
const firstWithdrawal = movements.find((mov) => mov < 0);
//it will not return a new array but the first element in the array that satisfies this condition
console.log(movements);
//console.log(firstWithdrawal); // -400

//DIFFERENCES WITH FILTER
//FILTER RETURNS ALL THE ELEMENTS FROM THE ARRAY AND RETURNS NEW ARRAY

const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const account5 = {
  owner: "George Kolonas",
  movements: [20],
  interestRate: 1.2, // %
  pin: 1111,
};

const accounts = [account1, account2, account3, account4, account5];

console.log(accounts);
//with the find we can find an object in the array based on some property of that object

// 1 loop over accounts
// 2 Select one of the accounts based on the name
// 3 Lets get the object where the owner is Jessica Davis

const account7 = accounts.find((acc) => acc.owner === "Jessica Davis");
console.log(account7); //returns the account  the Object OF the owner which name is Jessica Davis

/// FINDLAST AND FINDLASTINDEX METHODS
console.log(movements);
const lastWithdrawal = movements.find((mov) => mov < 0);
console.log(lastWithdrawal);
// It's looking from the last element of the array and holds the
// first element which fulfills the condition mov < 0

const lastestLargeMovementIndex = movements.findLastIndex(
  (mov) => Math.abs(mov) > 1000,
);
console.log(lastestLargeMovementIndex); // Holds the value of the index ! !
//its searching through the array and holds the index of the element that will find which fulfills the condition mov > 1000
//'Your latest large movement was X movements ago'

console.log(movements); //EQUALITY
console.log(movements.includes(-130)); // true

//we want to know if there is any positive movement in this array > 0
//if we had === instead of > its the same with the includes() method
const anyDeposits = movements.some((mov) => mov > 1500); //CONDITION
console.log(anyDeposits); //true

// EVERY method
//If every element passes the condition then it returns true
console.log(movements.every((mov) => mov > 0));
console.log(account4.movements.every((mov) => mov > 0));
//Account4 has only deposit movements

const deposit = (mov) => mov > 0;
console.log(movements.some(deposit)); //Returns true if atleast one element of the array is > 0
console.log(movements.every(deposit)); // Returns true if All the elements of the array is > 0
console.log(movements.filter(deposit)); // Returns a new array which contains all the elements of the array that fullfill the condition > 0

const arr4 = [[1, 2, 3], [4, 5, 6], 7, 8];
//ES 2019 NEW METHODS
//1] FLAT
console.log(arr.flat()); //No callback function / ONE LEVEL NESTING and destruct the arrays in one
// the result : [1,2,3,4,5,6,7,8];

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());

const accountMovements = accounts.map((acc) => acc.movements);
console.log(accountMovements); //Returns one array which contains array element equal with the amount of the accounts and each array contains the moves of each account
const allMovements = accountMovements.flat(); //We destruct the array and we join all the arrays into one array , which in result contains all the moves of each acount
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const overalBalanceRemake = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceRemake);

//FLATMAP METHOD combines the two methods flat and map
//goes only one level deep in nested arrays
const overalBalance2 = accounts
  .flatMap((acc) => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//Array Grouping 2024 Methods
console.log(movements);

const groupedMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? "deposits" : "withdrawals",
);

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, (account) => {
  const movementCount = account.movements.length;
  if (movementCount >= 8) return "very active";
  if (movementCount >= 4) return "active";
  if (movementCount >= 1) return "moderate";
  return "inactive";
});
console.log(groupedByActivity);

const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
console.log(groupedAccounts);

////Methods to create/fill array

const arr5 = [1, 2, 3, 4, 5, 6, 7];
console.log([new Array(1, 2, 3, 4, 5)]);

const x = new Array(7);
console.log(x); //Doesn't create an array with one element '7' but creates an array with 7 undefined elements

console.log(x.map(() => 5));

////  FILL Method
x.fill(1, 3, 5); // fill(value,start,end-1)
x;
x.fill(1); //fill all the array start-finish with the value 1
x;

arr5.fill(23, 2, 6);
arr5;

///// ARRAY.FROM (is a function with some methods)
const u = Array.from({ length: 7 }, () => 1); // return 1 in each of the array positions
u;
const z = Array.from({ length: 7 }, (_, i) => i + 1); //creates an array with a length of 7 and we use curr, i callback function for adding elements in the array
z;
//challenge try to generate an array with 100 random dice rolls

const randomDiceRolls = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 6 + 1),
);
randomDiceRolls;

//iterables -> string, maps, set they can convert to real arrays
//querySelectorAll() -> returns a nodelist its not real array it has not all the array methods like map
//We need to convent the nodelist into array to have access in all array methods

//MODERN ALTERNATIVES

/////REVERSING AN ARRAY
console.log(movements);
const reversedMov = movements.slice().reverse(); //SOS movements.toReserved() doesn't mutate the original array
reversedMov;
movements;
// when we use movements.reverse in the array we mutate the original array
//BUT IN CASE WE DON'T WANT THE ORIGINAL ARRAY TO BE MUTATED THEN WE USE SLICE() TO CREATE A COPY

/////toSorted (sort) , toSpliced (splice)
//we want to change the value in array
//movements[1] = 2000; //we did mutate the original array
//console.log(movements);
const newMovements = movements.with(1, 2000); //We want the movements array BUT WITH position 1 to have a value of 2000
console.log(newMovements);
movements;

/////////SUMMARY ///////////////////
///////////////////////////////////

//or flatMap
//ex 1
const bankDepositSum = accounts
  .map((acc) => acc.movements)
  .flat()
  .filter((el) => el > 0)
  .reduce((acc, el) => acc + el, 0);
console.log(bankDepositSum);

//ex 2 How many deposits there have been in the bank with at least 1000$

const bankDepositsUpto1000 = accounts
  .flatMap((el) => el.movements)
  .filter((el) => el >= 1000) // or reduce((count, cur) => (cur >= 1000? ++count : count), 0);
  .reduce((count, _) => count + 1, 0); // .length (its the same on or another)

bankDepositsUpto1000;

let a = 10;
let b = 10;
console.log(++b);
console.log(a++);
console.log(a); // a++ still return the old value

//ex 3 Create a new object or it could be a new array as well
// create an object which contains the sum of the deposits and of the withdrawals

const SumOfDeposits = accounts
  .flatMap((el) => el.movements)
  // .filter((el) => el > 0);
const objOfDeposits = Object.groupBy(SumOfDeposits, (el) =>
  el > 0 ? "deposit" : "withdrawal",
);
SumOfDeposits;
objOfDeposits;
console.log(objOfDeposits.deposit.reduce((sum, el)=> sum + el,0));
console.log(objOfDeposits.withdrawal.reduce((sum, el)=> sum + el,0));

//simple function that converts any string to a title case (all the words in the sentence is capitalized)
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function(title) {
  //console.log(title);
  console.log(title.split(" ").map((el)=> el[0].toUpperCase() + el.slice(1)).join(" "))
  return title.split(" ").map((el)=> el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ");
};
const text = "this is a nice tITle";
const titleMutate = convertTitleCase(text);
console.log(titleMutate);

//Code Challenge 
//Dogs eating too much or too little food .

//Recommended food portion : wight ** 0.75 * 28 // grams of food / weight needs to be in kg
// much > food portion
// little < food portion
// eating okay means the dog current portion is within range 10% above or below 

// Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) 
// and add it to the object as a new property.
//  Do NOT create a new array, simply loop over the array 
// (We never did this before, so think about how you can do this without creating a new array).

// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: 
// Some dogs have multiple users, so you first need to find Sarah in the owners array,
//  and so this one is a bit tricky (on purpose) 🤓

// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
// 9. Group the dogs by the number of owners they have
// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1.
// dogs.map(el => el.recFood = el.weight ** 0.75 * 28);
// console.log(dogs);

//2.
const SarahIndex =dogs.map( el => el.owners.includes('Sarah')).findIndex((el) => el === true );
SarahIndex
const SarahDogFood = dogs[SarahIndex].curFood > (dogs[SarahIndex].recFood * 0.90) && dogs[SarahIndex].curFood < (dogs[SarahIndex].recFood * 1.10);
SarahDogFood;
if(dogs[SarahIndex].curFood === dogs[SarahIndex].recFood){
  console.log("THe dog eats exactly the recommend food portion");
}else{
  console.log(`Sarah's Dog ${ dogs[SarahIndex].curFood > dogs[SarahIndex].recFood ? (SarahDogFood === false ? "its eating too much " : " its eating much but its okay " ):  (SarahDogFood === false ? " its eating too little " : " its eating little but its okay " )  }`)
};


const index = (name) => dogs.map( el => el.owners.includes(name)).findIndex((el) => el === true );
console.log(index("Sarah"));

const DogEating = function ( currFood , recFood ){

const DogFood = currFood > (recFood* 0.90) && currFood < (recFood * 1.10);
if(currFood === recFood){
  console.log("THe dog eats exactly the recommend food portion");
}else{
  return(`The Dog ${ currFood > recFood ? (DogFood === false ? "its eating too much " : " its eating much but its okay " ):  (DogFood === false ? " its eating too little " : " its eating little but its okay " )  }`)
};
}

const ownersTooMuch = [];
const ownersTooLittle = [];
//3.
const firstOwners = dogs.map((el) => el.owners[0]);
for( owner of firstOwners){
  const i = index(owner);
  const Eating = DogEating(dogs[i].curFood , dogs[i].recFood);
  console.log(Eating);
  if(Eating == 'The Dog  its eating too little '){
    ownersTooLittle.push(dogs[i].owners);
  }
  if(Eating ==`The Dog its eating too much `){
    ownersTooMuch.push(dogs[i].owners)
  }
}
console.log(ownersTooLittle);
console.log(ownersTooMuch);

for(owners of ownersTooLittle){
  console.log(`${owners.map( (el) => `${el}'s`).join(' and ')} dog is eating to little `)
}
for(owners of ownersTooMuch){
  console.log(`${owners.map( (el) => `${el}'s`).join(' and ')} dog is eating to much `)
}

//1
dogs.forEach(dog => {
  dog.recFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

//2 Find Sarah's dog and log eating status
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
sarahDog;

//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood * 1.10)
  .map(dog => dog.owners).flat()
  ownersEatTooMuch;

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood * 0.90)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch); 
console.log(ownersEatTooLittle);  

// 4. Log the strings

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//6  Are all dogs eating okay amount ?
const isEatingOkay = dog => 
  dog.curFood > dog.recFood * 0.90 && dog.curFood < dog.recFood * 1.10;

const allEatingOkay = dogs.every(isEatingOkay);
console.log(allEatingOkay);
//7.
const dogsEatingOk = dogs.filter(isEatingOkay);
console.log(dogsEatingOk.map(el => el.owners));
//8.


const GroupObject = {   
  'exact' : dogs.filter(dog => dog.curFood === dog.recFood ),
  'too-much' : dogs.filter(dog => dog.curFood > dog.recFood * 1.10 ),
  'too-little' :  dogs.filter(dog => dog.curFood < dog.recFood * 0.90 ),
  'okay' : dogsEatingOk
};
console.log(GroupObject);

const dogsByOwnerCount = dogs.reduce((groups, dog) => {
  const count = dog.owners.length;
  console.log(count);
  if (!groups[count]) groups[count] = [];
  groups[count].push(dog);
  return groups;
}, {});
console.log(dogsByOwnerCount);

//10. Sort by recommended food (ascending) No mutation

const dogsSortedByRecFood = dogs.sort((a , b) => a.recFood - b.recFood );
console.log(dogsSortedByRecFood);