// 1. 엔화를 입력을 했을 때, 900보다 낮으면 "사야함!" 높으면"팔아야함!"

// function canIbuyYen(money) {
//     if(money >= 900){
//         return "팔아야함!";
//     } else {
//         return "사야함!";
//     }
// }
function canIbuyYen(money) {
  return money >= 900 ? "팔아야함!" : "사야함!";
}

// 2. 두 정수를 입력을 했을 때, 높은 값을 돌려주는 함수 만들기
function moreBigger(a, b) {
  return a > b ? a : b;
}

// 3. 커피메뉴가 [아메리카노, 라떼, 바닐라, 모카]가 있다고 가정할때
// 함수에 커피메뉴 번호와 갯수룰 입력받고
// ~~~커피와 ~~~갯수 주문완료를 돌려주는 함수 만들기!
function coffee(num, count) {
  const menu = ["아메리카노", "라떼", "바닐라", "모카"];
  return `${menu[num]} 커피와 ${count} 갯수 주문완료!`;
}
const num_coffee = Number(prompt("커피케뉴번호 입력"));
const count_coffee = Number(prompt("커피 갯수 입력"));
// const result = coffee(num_coffee, count_coffee);
// console.log(result);
console.log(coffee(num_coffee, count_coffee));
