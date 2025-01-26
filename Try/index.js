// fetch("데이터 경로").then((v)=>v.json()).then((data)=>)
// throw new Eooor()

// const divide = (a, b) => {
//   if (b == 0) throw new Error("에러 발생!!!");
//   console.log(`결과:${a / b}`)
//   return a / b;
// };

// // 에러를 처리하는 문법 try-catch
// try {
//   // 오류가 발생할 가능성이 있는 코드
//   const first = Number(prompt("첫번째 정수 입력"));
//   const second = Number(prompt("두번째 정수 입력"));
//   console.log(divide(first, second));
// } catch (error) {
//   // 오류 발생했을 때 실행되는 코드
//   console.log(error.message);
// } finally {
//   // 오류 발생 여부와 상관업시 항상 실행되는 코드 (옵션)
//   console.log("코드 끝!");
// }

// 유저에게 알파벳 a~c까지 입력하고 정상 입력하면 대문자로 출력하고
// a~c가 아닌 다른 것을 넣으면 에러 발생시키는 코드만들기!

// const alphabet = prompt("a~C까지 입력");
// try {
//   if (["a", "b", "c"].some((v) => v != alphabet)) throw new Error("a~c가 아님");
//   console.log(alphabet.toUpperCase());
// } catch (error) {
//   console.log(error.message);
// } finally {
//   console.log("프로그램 끝!");
// }

// const sayHello = (name) => {
//   if (typeof name != "string") throw new TypeError("문자열 아님");
//   console.log(`hello ${name}!`);
// };

// try {
//   sayHello(100);
// } catch (error) {}

// try {
//   fetch("https://api.sampleapis.com/coffee/hot")
//     .then((v) => {
//       if (!v.ok) throw new Error("네트워트 이상함");
//       return v.json();
//     })
//     .then((v) => {
//       if (v.error) throw new Error("현재 API 데이터 오류!");
//       console.log(v);
//     });
// } catch (error) {
//   console.log(error.message);
// }
