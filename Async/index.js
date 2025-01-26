// const test = () => {
//   return new Promise((success, fail) => {
//     setTimeout(() => {
//       success("고기");
//     }, 2000);
//   });
// };
// console.log(test); //promise pending
// test.then((v) => console / log(v)); // 고기
// setTimeout(() => console.log(test), 3000); // promise fullfiled

// const newFunc = () => {
//   const a = test();
//   console.log(a); // pending
// };

const makeMeat = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("고기");
    }, 2000);
  });
};

const newFunc = async () => {
  const a = await makeMeat(); // 프로미스 fullfiled or failed 될때 까지 기다림
  console.log(a); // 고기 [프로미스 결과값 받음]
};

newFunc();
