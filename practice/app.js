console.log('Hello World!');

let text = 'JavaScriptの練習'
console.log(text);

text = 'JavaScriptをマスターした'
console.log(text);

// 処理①
let longText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
console.log(longText);
console.log(longText);
console.log(longText);

// 処理②
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);
console.log(
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
);

let string = 'JavaScriptの練習';
console.log(string)

//文字列型(string)
let single = '文字列型です';
console.log(single);

let double = '英語だとstringと言います。';
console.log(double);

console.log('elephant')

let name = 'ジョニー';
let greet ='私は'+ name + '！';
console.log(greet);

let template = 'テンプレートリテラル';
let templateText = `これが${template}です。
${template}は改行もできます。`;
console.log(templateText);

//数値型(number型)
let num = 10;
console.log(num);

let numTen = 10;
let strTen = '10';
console.log(numTen,strTen);

let minus = -10;
let decimal = 1.1;
console.log(minus,decimal);

let num1 = 25;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let number = 5;
number = number + 3;
console.log(number)
//letのため後に書かれたに先に書かれたnumberに再代入されている

let number2 = 5;
number2 += 3;
console.log(number2);
//課題だと2はつかないがletで同じ変数は使えないため2にしてある
//上記の+=の構文はよく使うため覚える

let number3 = 5;
number3 += 3; // number = number + 3と同じ
console.log(number3);
// 以下を追記
number3 -= 1; // number = number - 1と同じ
console.log(number3);
number3 *= 5; // number = number * 5と同じ
console.log(number3);
number3 /= 7; // number = number / 7と同じ
console.log(number3);

let increment = 0;
console.log(increment);
increment++; // increment += 1と同じ
console.log(increment);

let decrement = 10;
console.log(decrement);
decrement--; // decrement -= 1と同じ
console.log(decrement);

let bigNum = 25;
let smallNum = 2;
console.log(bigNum % smallNum); // 25 / 2 = 12 あまり 1 なので1が表示される
console.log(bigNum ** smallNum); // 25の2乗なので、25 * 25となり、625が表示される

let stringNum = '25';
let numberNum = 2;

console.log(stringNum + numberNum); // => 252
//コンソール上は252と表示されて文字型の表示になっている

//配列型(array型)
let names = ['John', 'Bob', 'Michael', 'Emma'];
console.log(names);
console.log('names[0] => ', names[0]);
console.log('names[1] => ', names[1]);
console.log('names[2] => ', names[3]);
console.log('names[3] => ', names[4]);
console.log('names.length => ', names.length);
//インデックスを用いて自動で番号を割り振る

let emptyNames = [];
emptyNames[0] = 'John';
emptyNames[1] = 'Bob';
emptyNames[2] = 'Michael';
emptyNames[3] = 'Emma';
console.log(emptyNames, emptyNames.length);
//変数が空白のため番号を自分でつけて追加する

//オブジェクト型(object型)
/*let John = {
  name: 'John',// key(キー):value(バリュー)
  age: 26,
  bloodType: 'A',
  favorite: 'card',
}*
console.log(John.bloodType);*///下記で使うためコメントアウト
//=>Aとなる　Johnの中のキーを指定してコンソール上はバリューが返答される

let Andy = {};//Andyのオブジェクト内は空白が値になるが
Andy.name = 'Andy';//変数を指定し.キーにすることで後付けする
Andy.age = 19;
Andy.bloodType = 'B';
Andy.favorite = 'sweets';
console.log(Andy.favorite);

let vehicles = [
  { name: 'car', color: 'red', speed: 'normal' },
  { name: 'train', color: 'green', speed: 'fast' },
  { name: 'airplane', color: 'grey', speed: 'faster' },
];
console.log(vehicles)

let one = '1';
let two = 2;

console.log('one →', typeof one, one); // one → string 1
console.log('two →', typeof two, two); // one → number 2  //ここわからない

//section3

let radius = 2;
let circle = radius * radius * 3.14;
console.log('円の面積は' + circle + 'です');

function getArea() {//関数
  let radius = 2;
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}
getArea(2);//下記のように基本値を指定した方がよさそう
getArea();

function getArea(radius) {//引数
  let circle = radius * radius * 3.14;
  console.log('円の面積は' + circle + 'です');
}

getArea(5);

function getArea(radius) {
  let circle = radius * radius * 3.14;
  return circle;  //このreturnを使うことを返し数という？
}

console.log('円の面積は' + getArea(5) + 'です');
console.log('この円の面積はなんと' + getArea(10) + 'でござんす');

function doFunc(callback) {
  console.log('doFuncが呼び出されました');
  callback();
}
doFunc(function() {
  console.log('コールバック関数が呼び出されました');
});

let John = {
  name: 'John',  // key（キー）: value（バリュー）
  age: 26,
  bloodType: 'A',//オブジェクトに関数を持たせる
  favorite: 'card',
  sing: function() {
    console.log('LA~LA~LA~~~♪');
  }
};

John.sing();  // 追記