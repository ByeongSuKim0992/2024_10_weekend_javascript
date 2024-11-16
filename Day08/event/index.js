// const btn = document.getElementById("button");
// btn.addEventListener("click", (e) => {
//   console.log(e);
// });

// const test = document.getElementById("test");
// test.addEventListener("input", () => {
//   console.log(e.target.value);
// });

// html에 span 태그를 만들어서 input에 글자갯수를 나타내도록하기!
// const inputTag = document.getElementById("inputTag");
// const spanTag = document.getElementById("spanLength");

// inputTag.addEventListener("input", (e) => {
//   spanTag.innerText = e.target.value.length;
// });

// 0~9글자 검은색 10글자 이상 span 빨간색으로 바꾸기
// const isValidLength = (length) => (length < 10 ? "black" : "red");
// inputTag.addEventListener("input", (e) => {
// if (e.target.value.length < 10) {
//   spanTag.style.color = "black";
// } else {
//   spanTag.style.color = "red";
// }
//   spanTag.style.color = isValidLength(e.target.value.length);
//   // spanTag.innerText = e.target.value.length;
//   isValidLength.innerText = e.target.value.length;
// });

// 입력한 갯수가 글자길이: 4 ~ 12  => span 글자수를 수정해주세요
// 4 <= length && length <= 12
// 입력한 내용이 !@# 하나 포함해야하고 => span 특수문자를 넣어야합니다.
// ["!","@","#"].some((v)=> value.includes(v))
// 입력한 내용이 소문자 it가 들어가야하고 => span it가 꼭 들어가야합니다.
// value.includes("it")
// 위 내용이 충족되면 span에 통과!
// inputTag.addEventListener("input", (e) => {
//   const value = e.target.value;
//   const length = e.target.value.length;
//   if (length < 4 || 12 < length) {
//     spanTag.innerText = "글자수를 수정해주세요";
//   } else if (!["!", "@", "#"].some((v) => value.includes(v))) {
//     spanTag.innerText = "특수문자를 넣어야합니다.";
//   } else if (!value.includes("it")) {
//     spanTag.innerText = "it가 꼭 들어가야합니다.";
//   } else {
//     spanTag.innerText = "통과";
//   }
// });

// input에 10글자 이하까지만 들어가도록 하기
// const test = document.getElementById("test");
// test.addEventListener("input", (e) => {
//   e.target.value = e.target.value.slice(0, 10);
// });

const check = document.getElementById("check");

check.addEventListener("input", (e) => {
  console.log(e.target.checked);
});
