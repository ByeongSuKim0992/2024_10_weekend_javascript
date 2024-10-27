// const arr = [1, 2, 3, 4, 5];
// // const plusThree = (a) => {
// //     return a + 3;
// // };
// const plusThree = (a) =>  a + 3;
// // const returnTen = (a) => {
// //     return 10;
// // };
// const returnTen = (a) =>  10;
// const plusTwo = (a) => a +2;
// arr.map(plusThree); // 각각 3더하기
// arr.map(returnTen); // 모두 10으로 바꾸기

const arr = [1, 2, 3, 4, 5];
arr.map((a) =>  a + 3); // 각각 3더하기 
arr.map((a) =>  10);// 모두 10으로 바꾸기




// 각각 2배
arr.map((a) => a * 2);
// 각각 제곱
arr.map((a) => a ** 2);
// 홀수면 +10, 짝수면 -10 해주기
// arr.map((a) => a % 2 == 1 ? a + 10 : a - 10);
arr.map((a) => a % 2 ? a + 10 : a - 10);
// 3이상이면 +3, 아니면 -3
arr.map((a) => a >= 3 ? a + 3 : a - 3);

const fruits = ["apple", "orange", "kiwi", "mango", "watermelon", "melon"]

// 문자의 길이가 5글자이하이면 모두 대문자화 해서 바꾸기
fruits.map((a) => a.length <= 5 ? a.toUpperCase() : "🍌");
// 그게 아니면(6글자 이상) '🍌'

// 1. 과일 리스트에서 a or e가 모두 포함하는지 확인하는 로직 만들기!
fruits.every((x)=> x.includes("a") || x.includes("e"));
// 2. 과일 리스트에서 글자가 모두 10글자가 이하인지 확인하는 로직 만들기!
fruits.every((x)=> x.length <= 10);

// 유저에게 아무 영단어를 입력받고
// aeiou(모음)이 들어갔는지 안들어 갔는지 확인하는 로직 만들기
const word = prompt("영어단어 입력!"); // kiwi
const wordList = words.split(" "); // [k,i,w,i]