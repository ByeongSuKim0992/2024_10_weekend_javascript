// 두 정수를 유저에게 입력 받고, 더 큰 숫자를 알럿으로 나타내기!
// const a = Number(prompt("첫 번째 정수"));
// const b = Number(prompt("두 번째 정수"));
// alert(a > b ? a : b);

// 1. 도너츠 구매 갯수를 입력, 도너츠 가격 입력
//    10개 이상이면 10% 할인, 20개 이상이면 20% 할인 해주고
//    콘솔로 나태내기!

const donut_count = Number(prompt("도너츠 갯수 입력"));
const donut_price = Number(prompt("도너츠의 가격 입력"));
const total_price = donut_count * donut_price;

const isUnder10 = donut_count < 10;
const isOver10andUnder20 = 10 <= donut_count && donut_count < 20;
const isOver20 = 20 <= donut_count;

isUnder10 && alert(`총 금액:${total_price}`);
isOver10andUnder20 && alert(`총 금액:${total_price * 0.9}`);
isOver20 && alert(`총 금액:${total_price * 0.8}`);

// 2. 정수를 입력해서 홀수인지 짝수인지 알려주기
//    정수를 입력하면 콘솔로그 ~~은 홀수/짝수입니다.
const num = Number(prompt("정수 입력"));
// const result = num % 2 == 1 ? "홀수" : "짝수";
const result = !!(num % 2) ? "홀수" : "짝수";
alert(`${num}은 ${result}입니다.`);
