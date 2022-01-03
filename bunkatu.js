// const myProfile = {
//     name: "しよ",
//     age: "24",
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1)


// 分割代入

// const myProfile = {
//     name: "しよ",
//     age: "24",
// };
// const { name, age } = myProfile;
// const message1 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message1)


// 配列パターン

// const myProfile = ['しよ', 24];

// const message3 = `私は${myProfile[0]}です。${myProfile[1]}歳です。`

// console.log(message3);

// 分割

const myProfile = ['しよ', 24];

const [name, age] = myProfile;
const message4 = `名前は${name}です。${age}歳です。`

console.log(message4);
