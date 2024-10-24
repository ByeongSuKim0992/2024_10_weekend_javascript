// const name = prompt("유저의 이름");
// const age = prompt("유저의 나이");
// const mbti = prompt("유저의 MBTI");

// console.log(name);
// console.log(age);
// console.log(mbti);

// 유저에게 오늘의 요일을 믈어버고
// 유저에게 오늘 할일을 물어보고
// 유저에게 오늘의 기분 물어본 후에
// 당신은 오늘 ~요일에 할인은 ~~이시군요! 기분이 ~~하시군요!

const day = prompt("오늘의 요일");
const toDo = prompt("오늘 할일");
const feeling = prompt("오늘의 기분");

console.log(
  `당신은 오늘 ${day} 요일에 할일은 ${toDo} 이시군요! 기분이 ${feeling} 하시군요!`
);
