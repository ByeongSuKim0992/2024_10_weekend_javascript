// const position = [
//   "positiony",
//   "z-index",
//   "top",
//   "button",
//   "right",
//   "Flexbox properties",
//   "float",
//   "clear",
// ];
// const display = ["display", "opacity", "transform"];
// const clipping = ["overflow", "clipping"];
// const animation = ["animation", "transition"];
// const box = [
//   "margin",
//   "box-shadow",
//   "boder",
//   "boder-radius",
//   "box-sizing",
//   "width",
//   "height",
//   "padding",
// ];
//data.js 옮김

// const container = document.createElement("section");
// container.style.cssText = "display:flex; flex-direction:column; gap:10px";
// const h4Tag = document.createElement("h4");
// h4Tag.innerText = "Position and layout";
// h4Tag.style.cssText = "font-size:14px; color:#878787";
// container.appendChild(h4Tag);

import { animation, box, clipping, display, position } from "./data.js";

// const buttonBox = document.createElement("div");
// buttonBox.style.cssText = "display:flex; gap:5px;";
// container.appendChild(buttonBox);

// // const btn1 = document.createElement("button");
// // btn1.style.cssText =
// //   "background-color: #d7d7d7;border-radius:5px; padding:10px 10px 7px;weight:blod;";
// // btn1.innerText = "positiony";
// // buttonBox.appendChild(btn1);

// // const btn2 = document.createElement("button");
// // btn2.style.cssText =
// //   "background-color: #d7d7d7;border-radius:5px; padding:10px 10px 7px;weight:blod;";
// // btn2.innerText = "z-index";
// // buttonBox.appendChild(btn2);

// position.forEach = (v) => {
//   const btn = document.createElement("button");
//   btn.style.cssText =
//     "background-color: #fac0ba;boder:1px solid:#fac0ba;border-radius:5px; padding:10px 10px 7px;weight:blod;";
//   btn.innerText = v;
//   buttonBox.appendChild(btn);
// };

// document.body.appendChild(container);

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const container1 = document.createElement("section");
// container1.style.cssText = "display:flex; flex-direction:column; gap:10px";

// const h4Tag1 = document.createElement("h4");
// h4Tag1.innerText = "Display and Visibility";
// h4Tag1.style.cssText = "font-size:14px; color:#878787";
// container.appendChild(h4Tag1);

// const buttonBox1 = document.createElement("div");
// buttonBox1.style.cssText = "display:flex; gap:5px;";
// container1.appendChild(buttonBox1);

// display.forEach = (v) => {
//   const btn = document.createElement("button");
//   btn.style.cssText =
//     "background-color: #ffc089;boder:1px solid:#ffc089;border-radius:5px; padding:10px 10px 7px;weight:blod;";
//   btn.innerText = v;
//   buttonBox1.appendChild(btn);
// };

// document.body.appendChild(container1);
// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const makeTemplate = (titleName, color, buttonList) => {
  const card = document.createElement("section");
  card.style.cssText = "display:flex; flex-direction:column; gap:10px;";

  const title = document.createElement("h4");
  title.innerText = titleName;
  title.style.cssText = `font-size:14px; color:#878787`;
  card.appendChild(title);

  const buttonBox = document.createElement("div");
  buttonBox.style.cssText = "display:flex; gap:5px;";
  card.appendChild(buttonBox);
  buttonList.forEach((v) => {
    const btn = document.createElement("button");
    btn.style.cssText = `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`;
    btn.innerText = v;
    buttonBox.appendChild(btn);
  });
  document.body.appendChild(card);
};

makeTemplate("Position and Layout", "#fac0ba", position);
makeTemplate("Display and Visibility", "#ffc089", display);
makeTemplate("Clipping", "#ffe18b", clipping);
makeTemplate("Animation", "#c8df91", animation);
makeTemplate("Box Model (from outside in)", "#98eccc", box);

///////////////////////////////////////////////////////////////////

// data.js - 변수 모으기 - 배열형 오브젝트 {제목,색상,버튼리스트}
// func.js - 함수 모으기 - 최소단위로 함수를 만들고 실행함
// style.js - css 관련 모으기 - 쌩css를 이름 붙히면서 바꿈
// index.js - 최종 모음집

// const makeTemplate = (titleName, color, buttonList) => {
//   const card = document.createElement("section");
//   card.style.cssText = "display:flex; flex-direction:column; gap:10px;";

//   const title = document.createElement("h4");
//   title.innerText = titleName;
//   title.style.cssText = `font-size:14px; color:#878787`;
//   card.appendChild(title);

//   const buttonBox = document.createElement("div");
//   buttonBox.style.cssText = "display:flex; gap:5px;";
//   card.appendChild(buttonBox);
//   buttonList.forEach((v) => {
//     const btn = document.createElement("button");
//     btn.style.cssText = `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`;
//     btn.innerText = v;
//     buttonBox.appendChild(btn);
//   });
//   document.body.appendChild(card);
// };

// makeTemplate("Position and Layout", "#fac0ba", position);
// makeTemplate("Display and Visibility", "#ffc089", display);
// makeTemplate("Clipping", "#ffe18b", clipping);
// makeTemplate("Animation", "#c8df91", animation);
// makeTemplate("Box Model (from outside in)", "#98eccc", box);
