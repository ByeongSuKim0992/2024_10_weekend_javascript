// cgv 프롬프트 프로그램

// 영화: [보통의 가족, 베놈, 베테랑2, 와일드 로봇, 대도시의 사랑법]
// 가격: 12000

// 스낵류: [팝콘, 캬라멜팝콘, 치즈팝콘, 나쵸, 오징어구이]
// 팝콘: 6000, 스낵: 4000

// 음료류: [콜라, 제로콜라, 스프라이트, 제로스프라이트]
// 콜라류 : 3000, 사이다류: 2000

// 구매하신 제품: 영화:[~~~], 스낵류: [~~~], 음료: [~~~]
// 총 가격: ~~입니다.

const movie = ["보통의 가족", "베놈", "베테랑2", "와일드 로봇", "대도시의 사랑법"];
const snacks = ["팝콘", "캬라멜팝콘", "치즈팝콘", "나쵸", "오징어구이"];
const beverages = ["콜라", "제로콜라", "스프라이트", "제로스프라이트"];

const selectedMovie = Number(prompt(movie + " 번호입력"));
const selectedSnack = Number(prompt(snacks + " 번호입력"));
const selectedBeverages = Number(prompt(beverages + " 번호입력"));

const deterSnackPrice = (snack) => {
    return snack.includes("팝콘") ? 6000 : 4000;
};

const deterBeveragePrice = (snack) => {
    return snack.includes("콜라") ? 3000 : 2000;
};

console.log(`구매하신 제품: 영화:${movie[selectedMovie]}, 스낵류: ${snacks[selectedSnack]}, 음료:${beverages[selectedBeverages]}`)