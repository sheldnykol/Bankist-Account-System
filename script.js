//'use strict';
// …or push an existing repository from the command line
// // git remote add origin https://github.com/sheldnykol/Bankist-Account-System.git
// git branch -M main
// git push -u origin main

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');

const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');

const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// Array Methods


// SLICE  //

//we take a part of the array
let arr = ['a','b','c','d','e'];
console.log(arr.slice(2)); // c , d ,e
//It does not manipulate the array but instead it creates a new array

//slice ( start (includes the element ) , end ( does not include the element ));
// just the array with the elements that was sliced ! IT DOES NOT CHANGE THE ORIGINAL ARRAY
// IF YOU WANT TO MANIPULATE THE ORIGINAL ARRAY TO DISQUALIFY FROM START TO END ELEMENTS THEN USE SPLICE
console.log(arr.slice(2,4)); //[c , d ]
console.log(arr.slice(-2)); // [d , e]
console.log(arr.slice(-1)); //[] e ]
console.log(arr.slice(1, -2 )); // [ b , c ]
console.log([...arr]); //copy the array into a new one
console.log(arr.slice()); // the same as destructuring the array it create a copy


// SPLICE //
//it mutates the array its changing the array itself

//console.log(arr.splice(2)) //[ c , d , e]
console.log(arr);// [ a , b] the other has been extracted
arr.splice(-1); //remove the last element of the array


// REVERSE  //
// it mutates the original array
let arr2 = ['j', 'i' , 'h' , 'g', 'j'];
//console.log(arr2.reserve());
console.log(arr2);

//  CONCAT  //
const letters = arr.concat(arr2);
console.log(letters);
// it combines two arrays into one 
console.log([...arr, ...arr2]); // its actually the same a concat

//  JOIN    //
console.log(letters.join(' - '));
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
console.log('george'.at(-1));

//Looping over an array
//ForEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//deposits postive values 
//withdrawals negative values

// user's movement

//for (const movement of movements) {
//i index
for (const[i, movement] of movements.entries()) {
    if(movement > 0) {
        console.log(`You deposited ${movement}`);

    }else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}

//  FOREACH //
//for each high order function so we need callback function
//loop over the array and in each iteration(επαν'αληψη) will execute this callback function
movements.forEach(function(movement, i , array) { //the order that argument the actual values passed in the callback function
//as it call this callback function in each iteration it  will pass in the current element of the array as an argument
//it will receive the current element of  the array as an argument

    if(movement > 0) {
        console.log(`You deposited ${movement}`);

    }else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}
);
// 0: function(200)
// 1: function(450)
// 2: function(400)
// . . .
//you cant use break in the forEach method


// SETS,MAPS AND FOR EACH
//
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

//EACH ARRAY is an ENTRY which the first element is the KEY
// and the other one is the VALUE

currencies.forEach(function(value, key, map){
    console.log(`${key}: ${value}`);
    console.log(map)
});
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
//SET ingore the double values in the array
currenciesUnique.forEach(function(value, key, map) {
       console.log(`${key}: ${value}`);
//they key is the exact as the value
//there is no reason for key to exist in the sets but they made it like this 
//the first one is the same as the second one value === key

})
//in javascript there are three major methods wich can process data !
// Data transformations with MAP , FILTER , REDUCE
//  MAP  //
//LOOP OVER ARRAYS IT WORKS IN SIMILAR WAY LIKE FOR EACH BUT THE DIFFERENCE HERE IS
//THAT CREATES A NEW ARRAY BASED ON THE ORIGINAL ARRAY
// ex. 
const array2 = [ 3 , 1, 4, 3, 2];
const mapArray = array2.map( (el) => el*2 );
console.log(mapArray);

//  FILTER    //
//filter elements in the orginal array 
// Returns a new array based on the condition that we will set 
// for example current > 2  in one array then the new filtered array will contain all the elements from the original
// array that is greater than 2

const filteredArray = array2.filter((e) => e > 2);

console.log(filteredArray); // Output: [3, 4, 3]


const movements1 = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1; 
const movementUSD = movements1.map(function(mov) {return mov * eurToUsd;

});
console.log(movements);
console.log(movementUSD);


//diffrent way of doing that without map
const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);
//functional programming with callbacks modernway for loop older way (iregguar ufnction synta)

const movementsDescriptions = movements.map((mov, i, arr) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
  // if (mov > 0 ){

  //   return `Movement ${i + 1}: You deposited ${mov}`;

  // }else{
  //     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  //   }
  })
console.log(movementsDescriptions);
//compute user name
//
const account5 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};
//SHOWS THE BALANCE RIGHT TO THE TOP OF THE PAGE
const calcAndDisplayBalance = function(acc) {
  const balance = acc.movements.reduce( (acc , mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`
};
 //movements of the account 1 

 //DISPLAY THE ACCOUNT MOVES
const displayMovements = function(movements) {
  console.log(containerMovements);
  console.log(containerMovements.innerHTML);
  console.log(containerMovements.textContent);
  // innerHtml vs Textconent 
  // text content return the text but with innerHtml returns everything including the Html
  containerMovements.innerHTML = ''
  movements.forEach(function(mov , i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'
    //create Html element that has the current balance
    //app element html 
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    console.log(html);
    containerMovements.insertAdjacentHTML('afterbegin', html)
    //this method accepts two strings the first is the position we want to attach the Html
    // beforebegin afterbegin beforeend afterend
    //the second argument is the string that contains the Html element
    //why we used afterbegin ? : the order of how it showed us the deposits and withdraw the last one is on the top of the previous one 
  })
}

//SHOWS THE TOTAL AMOUNT OF DEPOSITS
const calcDisplaySummary = function (movements) {
  const incomes = movements
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);
labelSumIn.textContent = `${incomes}€`
}


//SHOWS THE TOTAL AMOUNT OF OUT MONEY
const calcDisplayOut = function (movements) {
  const outcome = movements
  .filter((mov) => mov < 0)
  .reduce((acc,mov,i,array) => {
    console.log(array);
    return acc + mov 
  }, 0);
  console.log(outcome);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  //return outcome;
}

const findInterest = function (movements , intr) {
  const interest = movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * Number(intr)/100)
    .filter(int => int > 1)
    .reduce((acc, mov, i ,arr) => {
      console.log(arr);
      return acc + mov
    }, 0);
    labelSumInterest.textContent = `${interest}`;
    //return interest;
}




//So we added a property in the objects of the account arrays holding the values of the first letters of the first and last name
//George Kolonas - > gk
const createUsernames = function (users) {
 users.forEach(function (user) {
    user.username = user.owner.toLowerCase().split(' ').map( function(name) {
      return name[0];
    }).join('') //js string from Jonad Schmedtmann
    } //function which receive the data and return a result
  )
 } 
createUsernames(accounts);
console.log(accounts);

const updateUI = function (currentAccount) {
          //Display movements
        displayMovements(currentAccount.movements); //movement argument

        //Display Balance
        calcAndDisplayBalance(currentAccount); 

        //Display Summary
        calcDisplaySummary(currentAccount.movements);
        calcDisplayOut(currentAccount.movements);
        findInterest(currentAccount.movements,currentAccount.interestRate);
}

//LOGIN Handler ///

// Event handler
let currentAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  console.log(e.target);
//username jessica Devis == js 
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);
  if (currentAccount){
      if(currentAccount.pin === Number(inputLoginPin.value)){
        //Clear input fields
        inputLoginUsername.value = inputLoginPin.value = '';
        inputLoginPin.blur();

        //Welcome message 
        labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`;
        containerApp.style.opacity = 1;
        console.log(containerApp.style.opacity);
        


        updateUI(currentAccount);
      } else {
        alert(`Wrong pin for user ${currentAccount.owner}`)
      }
  } else {
    alert ('Wrong username , please try again');
  }
})


// TRANSFER MONEY TO OTHER USERS

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);//return the object
  console.log(amount);
  console.log(receiverAcc);
  // LOSE the amount and the receiver GAINS amount
  // Before sent money
  // amount > 0 , balace > amount , receiver exists , reicever account must not be the current account
  inputTransferAmount.value = inputTransferTo.value =' '; //clean the inputs
  if(amount > 0 && 
    currentAccount.balance >= amount && 
    receiverAcc?.username !== currentAccount.username){ //if does not exist does not cause error it will assign it as undefined
    
      console.log('Transfer valid');
      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
      updateUI(currentAccount);

  } else {
    alert("Something went wrong");
  }

});

btnLoan.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1 )){
    //Add movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount)
  }
  inputLoanAmount.value = '';
})


btnClose.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('Delete');
  console.log(currentAccount);
  console.log(Number(inputClosePin.value), Number(currentAccount.pin))
  if(Number(inputClosePin.value) === Number(currentAccount.pin) && inputCloseUsername.value === currentAccount.username){
    const index = accounts.findIndex(acc => acc.username === currentAccount.username);
    console.log(index);
    
    accounts.splice(index, 1);
    console.log(accounts);
    // hide UI
    containerApp.style.opacity = 0;
  }else {
    alert('Username or Pin is incorrect , please try again ! ');
  }
})

//findindex method : returns the index of the found element not the element itself
//close account : delete object from the accounts
//delete element of the array splicemethod (in splice we need the index of the element)















//split returns an array
//console.log(username);


//filter method in practice

//filter = condition


//with filter method
const deposits = movements.filter(function(mov) {
  //create an array of the deposits
  //Deposits only the movements that are positive values in the array 
  //const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
 return mov > 0 ; //only the array elements  for which this condition is true will make it to deposits array


});
console.log(deposits);

//with for loop
const depositsFor = [];
for(const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawls = movements.filter( function (mov) {
  return mov < 0;
})
console.log(withdrawls);


//Reduce : we will use reduce to get the global balance of the account
//one value not an entire array
//first argument is the accumulator in the reduce 
// accumulator -> snowball

const balance = movements.reduce(function(acc, curr,i,arr){
  //ACC is like Sum // curent sum of the previus values
  console.log(`iteration ${i} : ${acc}`)
   return acc + curr
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

  const max = movements.reduce((acc , mov ) => {   
    //the acc will keep track
   if( acc > mov ) {
    // console.log(acc);
    // console.log(mov);
    return acc;}
   else {
    // console.log(acc);
    // console.log(mov);
    return mov;}
  }, movements[0]
 
);
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
//challenge 3 Rewrite the DogTOHUmanYears in to arrow func
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
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
//reduce one result no array ! dont forget


//  FIND  METHOD //
//find method to retrieve one elemtn from array based on condition 
//find also accepts callback function which will then be called as the method loops over the array
//FIND LOOPS THE ARRAY BUT WITH THE DIFFERENCE THAT RETRIEVES ONE ELEMENT FROM THE ARRAY BASED ON ONE CONDITION
const firstWithdrawal = movements.find(mov => mov < 0)
//it will not return a new array but the first element in the array that satisfies this condition
console.log(movements);
//console.log(firstWithdrawal); // -400 

//DIFFERENCES WITH FILTER 
//FILTER RETURNS ALL THE ELEMENTS FROM THE ARRAY AND RETURNS NEW ARRAY

console.log(accounts);
//with the find we can find an object in the array based on some property of that object

// 1 loop over accounts
// 2 Select one of the accounts based on the name 
// 3 Lets get the object where the owner is Jessica Davis

const account7 = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account7); //returns the account  the Object OF the owner which name is Jessica Davis

/// FINDLAST AND FINDLASTINDEX METHODS
console.log(movements);
const lastWithdrawal = movements.find(mov => mov < 0);
console.log(lastWithdrawal);
// It's looking from the last element of the array and holds the 
// first element which fulfills the condition mov < 0

const lastestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 1000);
console.log(lastestLargeMovementIndex) ; // Holds the value of the index ! ! 
//its searching through the array and holds the index of the element that will find which fulfills the condition mov > 1000
//'Your latest large movement was X movements ago'

console.log(movements);//EQUALITY
console.log(movements.includes(-130)); // true

//we want to know if there is any positive movement in this array > 0
//if we had === instead of > its the same with the includes() method
const anyDeposits = movements.some(mov => mov > 1500); //CONDITION
console.log(anyDeposits); //true

// EVERY method
//If every element passes the condition then it returns true
console.log(movements.every(mov => mov> 0));
console.log(account4.movements.every(mov => mov > 0));
//Account4 has only deposit movements

const deposit = mov => mov > 0;
console.log(movements.some(deposit)); //Returns true if atleast one element of the array is > 0
console.log(movements.every(deposit)); // Returns true if All the elements of the array is > 0
console.log(movements.filter(deposit)); // Returns a new array which contains all the elements of the array that fullfill the condition > 0 

const arr4 = [[1, 2, 3], [4, 5, 6] , 7, 8];
//ES 2019 NEW METHODS
//1] FLAT 
console.log(arr.flat());//No callback function / ONE LEVEL NESTING and destruct the arrays in one
// the result : [1,2,3,4,5,6,7,8];

const arrDeep =[[[1,2],3], [4, [5,6]], 7 , 8];
console.log(arrDeep.flat());


const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements); //Returns one array which contains array element equal with the amount of the accounts and each array contains the moves of each account
const allMovements = accountMovements.flat(); //We destruct the array and we join all the arrays into one array , which in result contains all the moves of each acount 
console.log(allMovements);
const overalBalance = allMovements.reduce((acc , mov ) => acc + mov , 0);
console.log(overalBalance);

const overalBalanceRemake = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalanceRemake);

//FLATMAP METHOD combines the two methods flat and map
//goes only one level deep in nested arrays
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc , mov) => acc + mov ,0 )
console.log(overalBalance2);