// 일반함수, 화살표 함수, 콜백함수
// 콜백함수: 마술상자 안에 마술상자를 넣기

const kimchiStew = () => {
  console.log("김치 썰기");
  console.log("물 끓이기");
  console.log("김치 넣기");
  console.log("김치찌개 완성");
};

const kimchiRice = () => {
  console.log("김치 썰기");
  console.log("프라이팬 달구기");
  console.log("김치랑 밥 넣기");
  console.log("볶기");
  console.log("김치볶음밥 완성");
};

const recipe = (food) => {
  console.log("요리시작!🤗");
  food();
  console.log("요리 마무리!😛");
};

// f(x) = x + 1
// f(g(x)) // 함성함수(콜백함수)
recipe(kimchiRice);

// const recipe = (a) => {
//   console.log("요리 시작!🤗");
//   if ( a == 1) {
//     console.log("김치 썰기");
//     console.log("물끓이기");
//     console.log("김치 넣기");
//     console.log("김치찌개 완성");
//   } else if (a == 2) {
//     console.log("두부 썰기");
//     console.log("물끓이기");
//     console.log("김치 넣기");
//     console.log("된장 넣기");
//     console.log("된장찌개 완성");
//   } else if (a == 3) {
//     console.log("김치 썰기");
//     console.log("프라이팬 달구기");
//     console.log("김치랑 밥 넣기");
//     console.log("볶기");
//     console.log("김치볶음밥 완성");
//   } else {
//     console.log("그런 요리없음")
//   }
//   console/log("요리 마무리 하기!😛")
// }
// recipe(1);
// recipe(3);
