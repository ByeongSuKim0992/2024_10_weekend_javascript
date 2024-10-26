// 1. 엔화를 입력을 했을 때, 900보다 낮으면 "사야함!" 높으면"팔아야함!"
const yen = Number(prompt("엔화 입력"));

function canIbuyYen(money) {
    if(money >= 900){
        console.log("팔아야함");
    } else {
        console.log("사야함");  
    }
}

// 2. 두 정수를 입력을 했을 때, 높은 값을 돌려주는 함수 만들기
const num_first = Number(prompt("첫 번째 정수 입력"));
const num_second = Number(prompt("두 번째 정수 입력"));

// 3. 커피메뉴가 [아메리카노, 라떼, 바닐라, 모카]가 있다고 가정할때
// 함수에 커피메뉴 번호와 갯수룰 입력받고
// ~~~커피와 ~~~갯수 주문완료를 돌려주는 함수 만들기!