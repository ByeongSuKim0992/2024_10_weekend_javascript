// 시간제어 및 반복 실행

//1. 시간제어 setTimeout
// setTimeout(함수, 시간) : **시간 뒤에 **함수 실행시키기
// setTimeout(() => {
//   alert("점메추!");
// }, 3000);

//2. 반복실행 setInterval
// setInterval(() => {
//   console.log("마라탕");
// }, 3000);

//Quiz
// 현재시간 나오게 만들기
const time = document.querySelector("#time");

setInterval(() => {
  time.innerText = new Date().toLocaleTimeString();
}, 1000);
