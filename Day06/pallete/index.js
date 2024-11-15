import { colors } from "./data.js";
import { makeColor, makePallete } from "./func.js";

const pallete = makePallete();
colors.forEach((v) => pallete.appendChild(makeColor(v)));
document.body.appendChild(pallete);

// const pallete = document.createElement("section"); // 아래 한 줄 요약
// const pallete = makePallete();
// pallete.style.cssText =
//   "width:100vw;height:100vh;display:flex; grid-template-columns:repeat (5, 1fr)";
//// .func.js로 옮기고

// const color = [
//   "#1abc9c",
//   "#2ecc71",
//   "#3498db",
//   "#9b59b6",
//   "#34495e",
//   "#16a085",
//   "#27ae60",
//   "#2980b9",
//   "#8e44ad",
//   "#2c3e50",
//   "#f1c40f",
//   "#e67e22",
// ];
// data.js 옮기고

////////////////////////////////////////////////////////////////////////////////
// const color = document.createElement('div');
// color.style.cssText = "width:100%;height:100%;background-color:#1abc9c";
// pallete.appendChild(color);

// const color1 = document.createElement('div');
// color1.style.cssText = "width:100%;height:100%;background-color:#1abc9c";
// pallete.appendChild(color1);

// const color2 = document.createElement('div');
// color2.style.cssText = "width:100%;height:100%;background-color:#1abc9c";
// pallete.appendChild(color2);
/////////////////////////////////////////////////////////////////////////////
// 밑에 걸로 변경

// const makeColor = (color) => {
//   const box = document.createElement("div");
//   box.style.cssText = `width:100%;height:100%;background-color:${color}`;
//   return box;
// };
// .func.js로 옮기고

// color.forEach((v) => {
//   const colorBox = makeColor(v);
//   pallete.appendChild(colorBox);
// });
// 아래로 변경
// color.forEach((v) => pallete.appendChild(makeColor(v)));

// document.body.appendChild(pallete);
