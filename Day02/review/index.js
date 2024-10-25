// 1. 유저에게 운동 3개를 물어보고, 콘솔로 1번운동 -> 2번운동 -> 3번운동
const first_exe = prompt("1번 운동");
const second_exe = prompt("2번 운동");
const third_exe = prompt("3번 운동");

console.log(` 오운완: ${first_exe} -> ${second_exe} -> ${third_exe}`);
// 2. 두 정수를 m, n 입력 받고, m의 n제곱의 결과를 콘솔로 나타내기!
const m = Number(prompt("정수 m 입력"));
const n = Number(prompt("정수 n 입력"));

console.log(`${m}의 ${n}제곱 결과: ${m ** n}`);
// 3. 달러를 입력하면 원화로 콘솔로 나타내기!
const dollar = Number(prompt("달러 입력"));
const exchange_rate = 1389;

console.log(`환전결과:${dollar * exchange_rate}원`);

// 4. 1000이하의 정수를 입력 받고, 분초로 나타내기!
// 65 -> 1분 5초, 192 -> 3분 12초
const num = Number(prompt("1000이하의 정수 입력"));
const min = parseInt(num / 60);
const seconds = num % 60;
console.log(`${min}분 ${seconds}초`);
