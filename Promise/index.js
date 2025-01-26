// Promise
//  비동기 작업의 미래 완료 또는 실패를 표현하는 객체

// const test = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("성공했음!");
//   }, 1000);
// });
// console.log(test);
// setTimeout(() => {
//   console.log(test);
// }, 2000);

// const test = new Promise((success, fail) => {
//   setTimeout(() => {
//     success("성공했음!");
//   }, 1000);
// });
// test.then((v) => console.log(v));
// console.log(test);

// const orderPizza = () => {
//   console.log("피자 주문~");
//   return new Promise((success, fail) => {
//     setTimeout(() => {
//       success("맛있는 페퍼로니 피자 완료!");
//     }, 3000);
//   });
// };
// console.log(orderPizza());
// orderPizza().then((v) => console.log(v));

const orderPizza = () => {
  console.log("피자 주문~");
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("맛있는 페퍼로니 피자 완료!");
    }, 3000);
  });
};

console.log(orderPizza());
orderPizza().then((v) => console.log(v));
