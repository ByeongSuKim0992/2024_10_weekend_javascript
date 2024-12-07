// stroage.js
// localStorage.setItem("coffee", "amricano");
// localStorage.setItem("bread", "롤케익");
// localStorage.setItem("car", "카렌스");
// localStorage.getItem("bread");

//Quiz
// input과 button html에서 만들고
// input에 오늘 마신 커피를 입력하고 button을 누르면
// h1 태그에 마신커피를 나타나게 하고
// 새로고침을 해도 그대로 나오도록 하기!
// 위에 다시 input button 새롭게 갱신하면 갱신된 데이터로 나오기!

const input = document.querySelector("#input");
const button = document.querySelector("#button");
// const head = document.querySelector("#head");
const lunchList = document.querySelector("#lunchList");

const data = localStorage
  .getItem("lunch")
  .split(",")
  .map((v) => `<li>${value}</li>`)
  .forEach((v) => lunchList.insertAdjacentHTML("beforeend", v));

// head.innerText = localStorage.getItem("head") || "데이터 없음 ㅅㄱ";

// button.addEventListener("click", () => {
//   localStorage.setItem("head", input.value);
//   head.innerText = input.value;
// });

button.addEventListener("click", () => {
  const { value } = input;
  const lunch = localStorage.getItem("lunch") || "";
  localStorage.setItem("lunch", lunch + "," + value);
  lunchList.insertAdjacentHTML("beforeend", `<li>${value}</li>`);
});

// localStorage.setItem("점메추", ["햄버거", "돈까스", "마라탕", "로제떡볶이"]);
// 저장할때 문자열로 저장됨!
// alert(localStorage.getItem("점메추"));
