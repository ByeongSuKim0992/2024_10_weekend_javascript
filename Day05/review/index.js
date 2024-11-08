//동사(v) -> 함수
//[].push();
//명사 -> 속성

//1.[5,13,25,31,49]를 모두 숫자 10 더해서 콘솔로 나타내기!
const arr = [5, 13, 25, 31, 49];
const answer1 = arr.map((x) => x + 10);
console.log(answer1);

//2.[5,13,25,31,49]를 홀수면 두배 짝수면 -10을 해서 콘솔로 나타내기
const answer2 = arr.map((x) => (x % 2 ? x * 2 : x - 10));
console.log(answer2);

//3.["kiwi", "apple","prange","pomeapple"]
// apple 포함하면 대문자로 바꾸고 아니면 문자길이로 바꾸기!
const fruits = ["kiwi", "apple", "prange", "pineapple"];
const answer3 = fruits.map((X) =>
  X.includes("apple") ? X.toUpperCase() : X.length
);
console.log(answer3);
