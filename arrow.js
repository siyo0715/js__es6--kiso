// 従来

function func1(str) {
    return str;
}
console.log(func1('func1です'))

// arrow関数

// const func2 = (str) => {
//     return str;
// }
// console.log(func2('func2です'))

// 短縮
const func2 = (str) => str;
console.log(func2('func2です'));


// 計算
const func3 = (num1, num2) => {
    return num1 + num2;
};

console.log(func3(10, 20))