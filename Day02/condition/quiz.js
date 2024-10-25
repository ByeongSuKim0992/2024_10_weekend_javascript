// 유저에게 프로래밍 점수를 입력 받고,
// 90점 이상이면 A,
// 80점 이상이면 B,
// 70점 이상이면 C,
// 60점 이상이면 D,
// 그 외에는 F

// const score = Number(prompt("프로그래밍 점수 입력"));
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 유저에게 각도(angle)믈어보고
// 평각,직각,둔각,예각 나타내기!
// const angle = Number(prompt("몇도 입니까?"));

// const isAcute = 0 < angle && angle < 90;
// const isRight = angle == 90;
// const isObtuse = 90 < angle && angle < 180;
// const isFlat = angle == 0 || angle == 180;

// if (isAcute) {
//   console.log("예각");
// } else if (isRight) {
//   console.log("직각");
// } else if (isObtuse) {
//   console.log("둔각");
// } else if (isFlat) {
//   console.log("평각");
// } else {
//   console.log("해당 각은 없습니다.");
// }

// 버스 요금 계산기 프로그램

// 유저에게 1.마을버스[1000] 2.시내버스[1500] 3.광역버스[2000] 4.고속버스[5000] 선택하고
// 유저에게 나이를 물어보기,
// 어린이:50%할인 / 8~19살: 30%할인 / 65세이상: 20%할인

// 모두 선택 후 콘솔로그: ~~버스의 최종 금액은 ~~입니다.

const bus = Number(
  prompt(
    "1.마을버스[1000] 2.시내버스[1500] 3.광역버스[2000] 4.고속버스[5000] 선택"
  )
);
const age = Number(prompt("나이가 몇살입니까?"));

if (bus == 1) {
  if (age < 8) {
    console.log(`마을버스의 최종 금액은 ${1000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`마을버스의 최종 금액은 ${1000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`마을버스의 최종 금액은 ${1000 * 0.7}입니다.`);
  } else {
    console.log(`마을버스의 최종 금액은 ${1000 * 1}입니다.`);
  }
} else if (bus == 2) {
  if (age < 8) {
    console.log(`시내버스의 최종 금액은 ${1500 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`시내버스의 최종 금액은 ${1500 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`시내버스의 최종 금액은 ${1500 * 0.7}입니다.`);
  } else {
    console.log(`시내버스의 최종 금액은 ${1500 * 1}입니다.`);
  }
} else if (bus == 3) {
  if (age < 8) {
    console.log(`광역버스의 최종 금액은 ${2000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`광역버스의 최종 금액은 ${2000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`광역버스의 최종 금액은 ${2000 * 0.7}입니다.`);
  } else {
    console.log(`광역버스의 최종 금액은 ${2000 * 1}입니다.`);
  }
} else if (bus == 3) {
  if (age < 8) {
    console.log(`고속버스의 최종 금액은 ${5000 * 0.5}입니다.`);
  } else if (65 <= age) {
    console.log(`고속버스의 최종 금액은 ${5000 * 0.8}입니다.`);
  } else if (8 <= age && age <= 19) {
    console.log(`고속버스의 최종 금액은 ${5000 * 0.7}입니다.`);
  } else {
    console.log(`고속버스의 최종 금액은 ${5000 * 1}입니다.`);
  }
} else {
  console.log("번호 입력 오류!");
}
