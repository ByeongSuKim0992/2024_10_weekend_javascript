// 이벤트 추가하는 방법

//1.addeventlistenr
// const helloButton = document.querySelector(".hello");
// helloButton.addEventListener("click", () => {
//   alert("오늘은 일요일!");
// });

// 2.onclick
// const hello = () => {
//   alert("오늘은 일요일임!");
// };

//Quiz
//버튼이 💛 누르면 💔
// const breakHeart = () => {
//   const heart = document.querySelector(.heart);
//   heart.innerText = "💔";
// };

//버튼이 💛 누르면 💔 누르면 💛 누르면 💔
// const breakHeart = () => {
//   const heart = document.querySelector(".heart");
//   heart.innerText = heart.innerText == "💔" ? "💛" : "💔";
// };

//1.addeventlistenr
// const box = document.querySelector("#box");
// const big = document.querySelector("#big");
// big.addEventListener("click", () => {
//   box.style.width = "200px";
//   box.style.height = "200px";
// });
// const small = document.querySelector("#small");
// small.addEventListener("click", () => {
//   box.style.width = "100px";
//   box.style.height = "100px";
// });
// const sky = document.querySelector("#sky");
// sky.addEventListener("click", () => {
//   box.style.backgroundColor = "skyblue";
// });
// const pink = document.querySelector("#pink");
// pink.addEventListener("click", () => {
//   box.style.backgroundColor = "pink";
// });

// const one = document.querySelector("#one");
// one.addEventListener("click", () => {
//   alert("원!");
// });

// const box = document.querySelector("#box");

// const big = document.querySelector("big");
// big.addEventListener("click", () => {
//   box.style.width = "100px";
//   box.style.height = "100px";
// });

// const small = document.querySelector("small");
// small.addEventListener("click", () => {
//   box.style.width = "100px";
//   box.style.height = "100px";
// });

// const sky = document.querySelector("sky");
// sky.addEventListener("click", () => {
//   box.style.backgroundColor = "skyblue";
// });

// const pink = document.querySelector("pink");
// pink.addEventListener("click", () => {
//   box.style.backgroundColor = "pink";
// });

// 2.onclick
const box = document.querySelector("#box");

const big = () => {
  box.style.width = "200px";
  box.style.height = "200px";
};

const small = () => {
  box.style.width = "100px";
  box.style.height = "100px";
};

const sky = () => {
  box.style.backgroundColor = "skyblue";
};

const pink = () => {
  box.style.backgroundColor = "pink";
};
