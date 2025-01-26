//Q1
let nickname = 'ごっしー';
let age = 28;

let Q1 = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。'
console.log(Q1);

//Q2
let languages = ['JavaScript','PHP','Rudy','Python','Go'];
let Q2 = '私の好きな言語は' + languages[0] + 'です。次は' + languages[3] + 'を勉強してみたいです。'
console.log(Q2);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
let Bob = {
  name: 'Bob',
  age: 33,
  favorites: ['Tinder', 'The Legend of Zelda'],
}
console.log(Bob.favorites[1]);

//Q5
  let age1 = 26;
  let age2 = 33;
  let age3 = 22;
console.log((age1 + age2 + age3) / 3);

//Q6
function sayHello() {
  console.log('Hello');
}
sayHello();

let sayWorld = function() {
  console.log('World');
};
sayWorld();

//Q7
user.birthday = '2000-09-27';
user.Hello = 'sayHello';
sayHello();

//Q8
let calc = {};

calc.add = function(x,y){
  console.log(x + y)
}
calc.subtract = function(x,y){
  console.log(x - y);
}
calc.multiply = function(x,y){
  console.log(x * y);
}
calc.divide = function(x,y){
  console.log(x / y);
}

calc.add(3,4);
calc.subtract(15,5);
calc.multiply(7,7);
calc.divide(25,5);

//Q9
function remainder(x,y) {
  return x % y;
}
let result = remainder(5,3)
  console.log('5を3で割った余りは' + result + 'です。');

//Q10
  /*関数foo内でxは定義されておりスコープの範囲は関数の中にあるxを参照しようとします。
  しかし例文のconsoleで参照したいxが関数の中にあるためスコープの対象にならずエラーが発生します。
  */

//応用

//Q1
let random = Math.floor(Math.random() * 10);
console.log(random);

//Q2
function hello() {
  console.log('Hello World!');
}
setTimeout(hello,3000)

//Q3
let num = -4;
if (num > 0) {
  console.log('num is greater than 0');
}else if ( num < 0) {
  console.log('num is less than 0');
}else if (num = 0) {
  console.log('num is 0');
}

//Q4
let numbers = [];
for (let i = 0; i < 100; i++){
  numbers[i] = i;
}
console.log(numbers);

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];
  if (typeof element === 'number') {
    if (element % 2 === 0) {
      console.log('even');
    } else {
      console.log('odd');
    }
  } else {
    console.log('not number');
  }
}