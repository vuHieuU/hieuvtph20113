'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Elements
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
// Functions

// l???y t??n vi???t t???t
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

// chuy???n ?????ng c???a ti???n
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}???</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// ti???n trong t??i kho???n
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}???`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}???`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}???`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}???`;
};

// ????ng nh???p
let currentAccount;
btnLogin.addEventListener('click' , function(e){
   e.preventDefault();
  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount)

  if(currentAccount?.pin === Number(inputLoginPin.value)){
      labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
  }
  containerApp.style.opacity= 100;
  inputLoginUsername.value = inputLoginPin.value = '';
  updateUI(currentAccount)

});

// chuy???n ti???n
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value)
  const transferTo = accounts.find(acc => acc.username === inputTransferTo.value);

  // console.log(transferTo ,amount)
  inputTransferAmount.value = inputTransferTo.value = '';

  if(amount > 0 
    && currentAccount.balance >= amount 
    && transferTo?.username !== currentAccount.username ){
             currentAccount.movements.push(-amount)
             transferTo.movements.push(amount)
            updateUI(currentAccount)
  }
})

// vay ti???n
btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount)

    updateUI(currentAccount)
    inputLoanAmount.value = '';
  }
})

// x??a t??i kho???n

btnClose.addEventListener('click', function(e){
  e.preventDefault();



  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount?.pin){
    // l???y id
      const index = accounts.findIndex(acc => acc.username === currentAccount.username)
      console.log(index)
    
    // x??a
    accounts.splice(index, 1);

    // x??a xong v??? 0
    containerApp.style.opacity= 0;

  }
})

// x???p x???p
let sorted;
btnSort.addEventListener('click', function(e){
  e.preventDefault()

  displayMovements(currentAccount.movements, !sorted)
  sorted = !sorted

})






// console.log(accounts)

// const movement = account1.movements.filter(mov => mov > 0)
// // console.log(movement)

// const movemen =movement.filter(function(mov){
//   return mov > 0
// })
// // console.log(movemen)

// const acc1 = account1.movements

// let movSum = 0;
// for (const mov of acc1) movSum += mov;
    //  console.log(movSum)

// const movSum2 = acc1.reduce((acc,cur) => acc+cur, 0)
// console.log(movSum2)

// const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams')
// console.log(account)


// s???p s???p
// c??ch 1
// const mov = account1.movements.sort((a, b) => {
//   if(a < b)
//      return -1;
//   if(a > b)
//     return 1;
// })
// c??ch 2
// const mov = account1.movements.sort((a,b) => a-b)
// console.log(mov)

// c??ch 1
// const mov2 = account1.movements.sort((a, b) => {
//   if(a < b)
//      return 1;
//   if(a > b)
//     return -1;
// })
// c??ch 2
// const mov2 = account1.movements.sort((a,b) => b-a)
// console.log(mov2)

labelBalance.addEventListener('click', function(){
    const x = Array.from(document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('???', ''))
    );
    console.log(x)
})