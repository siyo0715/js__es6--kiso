// const nameArr = ["田中", "山田", "加藤"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }


// const nameArr = ["田中", "山田", "加藤"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// mapを使った例


// const nameArr = ["田中", "山田", "加藤"];

// const nameArr2 = nameArr.map((name) => {
//     return name;
// })

// console.log(nameArr2)

// mapの短縮例


const nameArr = ["田中", "山田", "加藤"];
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));





// filterを使った例


// const numArr = ["1", "2", "3","4","5"];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 === 0;
// })

// console.log(newNumArr)


// 最後に実践的なmapを学習

const newNameArr = nameArr.map((name) => {
    if (name === "田中") {
        return name 
    } else {
        return `${name}さん`
    }
})
console.log(newNameArr);