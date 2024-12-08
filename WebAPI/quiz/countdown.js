// Quiz
// countdown
// input에 시간을 입력하고 버튼을 누르면 멈춤 멈추기!
// 아래 h1에 입력한 숫자부터 0까지 countdown
const input = document.querySelector("#input");
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const countdown = document.querySelector("#countdown");

let target;

start.addEventListener("click", () => {
  const { value } = input;
  countdown.innerText = Number(value);

  const target = setInterval(() => {
    countdown.innerText = Number(countdown.innerText) - 1;
  }, 1000);

  setTimeout(() => {
    clearInterval(target);
  }, Number(value) * 1000);
});

stop.addEventListener("click", () => {
  clearInterval(target);
});
