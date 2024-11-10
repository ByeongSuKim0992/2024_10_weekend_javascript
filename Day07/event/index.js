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
