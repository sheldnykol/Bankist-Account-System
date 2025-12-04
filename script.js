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
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const accounts = [account1, account2, account3, account4, account5];

// // Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");

const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");

const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////Functions///////
//SHOWS THE BALANCE RIGHT TO THE TOP OF THE PAGE
const calcAndDisplayBalance = function (acc) {
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  acc.balance = balance;
  labelBalance.textContent = `${balance}€`;
};

//DISPLAY THE ACCOUNT MOVES
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";
  console.log(sort);
  console.log(movements);
  const moves = sort ? movements.slice().sort((a, b) => a - b) : movements;
  console.log(moves);

  console.log(containerMovements);
  console.log(containerMovements.innerHTML);
  console.log(containerMovements.textContent);
  // innerHtml vs Textconent
  // text content return the text but with innerHtml returns everything including the Html
  moves.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";
    //create Html element that has the current balance
    //app element html
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type} </div>
          <div class="movements__value">${mov}€</div>
        </div>
    `;
    console.log(html);
    containerMovements.insertAdjacentHTML("afterbegin", html);
    //this method accepts two strings the first is the position we want to attach the Html
    // beforebegin afterbegin beforeend afterend
    //the second argument is the string that contains the Html element
    //why we used afterbegin ? : the order of how it showed us the deposits and withdraw the last one is on the top of the previous one
  });
};

//SHOWS THE TOTAL AMOUNT OF DEPOSITS
const calcDisplaySummary = function (movements) {
  const incomes = movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;
};

//SHOWS THE TOTAL AMOUNT OF OUT MONEY
const calcDisplayOut = function (movements) {
  const outcome = movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov, i, array) => {
      console.log(array);
      return acc + mov;
    }, 0);
  console.log(outcome);
  labelSumOut.textContent = `${Math.abs(outcome)}€`;

  //return outcome;
};

const findInterest = function (movements, intr) {
  const interest = movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * Number(intr)) / 100)
    .filter((int) => int > 1)
    .reduce((acc, mov, i, arr) => {
      console.log(arr);
      return acc + mov;
    }, 0);
  labelSumInterest.textContent = `${interest}`;
  //return interest;
};

//So we added a property in the objects of the account arrays holding the values of the first letters of the first and last name
//George Kolonas - > gk
const createUsernames = function (users) {
  users.forEach(
    function (user) {
      user.username = user.owner
        .toLowerCase()
        .split(" ")
        .map(function (name) {
          return name[0];
        })
        .join(""); //js string from Jonad Schmedtmann
    }, //function which receive the data and return a result
  );
};

const updateUI = function (currentAccount) {
  //Display movements
  displayMovements(currentAccount.movements); //movement argument

  //Display Balance
  calcAndDisplayBalance(currentAccount);

  //Display Summary
  calcDisplaySummary(currentAccount.movements);
  calcDisplayOut(currentAccount.movements);
  findInterest(currentAccount.movements, currentAccount.interestRate);
};
///END OF FUNCTIONS/////

//1st running function -
createUsernames(accounts); //GEORGE DELOX -> gd adds username in the reference type object

// Event handler
let currentAccount;

//LOGIN EVENT ///
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);
  console.log(e.target); // <button class="login__btn">→</button>

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value,
  );
  console.log(currentAccount);
  if (currentAccount) {
    if (currentAccount.pin === Number(inputLoginPin.value)) {
      //Clear input fields
      inputLoginUsername.value = inputLoginPin.value = "";
      inputLoginPin.blur();

      //Welcome message
      labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
      containerApp.style.opacity = 1;

      updateUI(currentAccount);
    } else {
      alert(`Wrong pin for user ${currentAccount.owner}`);
    }
  } else {
    alert("Wrong username , please try again");
  }
});

// TRANSFER MONEY TO OTHER USERS EVENT //

btnTransfer.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value,
  ); //return the object
  console.log(amount);
  console.log(receiverAcc);
  // LOSE the amount and the receiver GAINS amount
  // Before sent money
  // amount > 0 , balace > amount , receiver exists , reicever account must not be the current account
  inputTransferAmount.value = inputTransferTo.value = " "; //clean the inputs
  if (
    amount > 0 &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    //if does not exist does not cause error it will assign it as undefined

    console.log("Transfer valid");
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert("Something went wrong");
  }
});

// LOAN MONEY EVENT
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    //Add movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// DELETE ACCOUNT EVENT
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Delete");
  console.log(currentAccount);
  console.log(Number(inputClosePin.value), Number(currentAccount.pin));
  if (
    Number(inputClosePin.value) === Number(currentAccount.pin) &&
    inputCloseUsername.value === currentAccount.username
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username,
    );
    console.log(index);

    accounts.splice(index, 1); //in position 'index' delete 1 element (the current one)
    console.log(accounts);
    // hide UI
    containerApp.style.opacity = 0;
  } else {
    alert("Username or Pin is incorrect , please try again ! ");
  }
});

// SORT BALANCES EVENT
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

//// FROM NODELIST TO ARRAY (TRANSFORM)

labelBalance.addEventListener("click", function () {
  //FIRST WAY OF ACHIEVING
  const movementsUI = Array.from(
    document.querySelectorAll(".movements__value"),
    (el) => Number(el.textContent.replace("€", "")),
  );
  console.log(movementsUI);
  //SECOND WAY USING SPREAD OPERATOR
  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});



