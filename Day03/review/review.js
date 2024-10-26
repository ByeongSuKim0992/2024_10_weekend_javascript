// 프로그래밍에서 절대 정답 없는 편
//0. 에러가 없기
//1. 가독성
//2. 성능

// 1. prompt로 유저에게 정수를 입력받고, 양수 or 0 or 음수를 알려주는 프로그램

const num = Number(prompt("정수 입력"));

if (num > 0) {
  console.log("양수");
} else if (num == 0) {
  console.log("0");
} else {
  console.log("음수");
}

//2. prompt로 유저에게 키와 몸무게를 입력받고, bmi지수에 따라서 결과 나타내기
// ex) 173 85 -> 비만

const height = Number(prompt("키 입력(m)"));
const weight = Number(prompt("몸무게 입력"));
const bmi = weight / height ** 2;

if (bmi >= 25) {
  console.log("비만");
} else if (bmi >= 23) {
  console.log("과체중");
} else if (bmi >= 18.5) {
  console.log("정상");
} else {
  console.log("저체중");
}

// 3. prompt로 유저에게 태어난 년도를 입력받고, 띠 나타내기
// ex) 2000 -> 용띠, 2005 -> 닭띠

const year = Number(prompt("태어난 년도 입력"));
const zodiac = year % 12;
const zodiacAnimal = {
  0: "원숭이",
  1: "닭",
  2: "개",
  3: "돼지",
  4: "쥐",
  5: "소",
  6: "호랑이",
  7: "토끼",
  8: "용",
  9: "뱀",
  10: "말",
  11: "양",
};
console.log(zodiacAnimal[zodiac]);

// if (zodiac == 0) {
//   console.log("원숭이");
// } else if (zodiac == 1) {
//   console.log("닭");
// } else if (zodiac == 2) {
//   console.log("개");
// } else if (zodiac == 3) {
//   console.log("돼지");
// } else if (zodiac == 4) {
//   console.log("쥐");
// } else if (zodiac == 5) {
//   console.log("소");
// } else if (zodiac == 6) {
//   console.log("호랑이");
// } else if (zodiac == 7) {
//   console.log("토끼");
// } else if (zodiac == 8) {
//   console.log("용");
// } else if (zodiac == 9) {
//   console.log("뱀");
// } else if (zodiac == 10) {
//   console.log("말");
// } else {
//   console.log("양");
// }
