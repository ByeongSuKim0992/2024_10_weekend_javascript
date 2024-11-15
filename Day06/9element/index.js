import { data } from "./data.js";
import { makeTemplate } from "./func.js";
// data.forEach((v) => makeTemplate(v.title, v.color, v.buttons));

// makeTemplate("Position and Layout", "#fac0ba", position);
// makeTemplate("Display and Visibility", "#ffc089", display);
// makeTemplate("Clipping", "#ffe18b", clipping);
// makeTemplate("Animation", "#c8df91", animation);
// makeTemplate("Box Model (from outside in)", "#98eccc", box);

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
//func.js 옮김

// makeTemplate("Position and Layout", "#fac0ba", position);
// makeTemplate("Display and Visibility", "#ffc089", display);
// makeTemplate("Clipping", "#ffe18b", clipping);
// makeTemplate("Animation", "#c8df91", animation);
// makeTemplate("Box Model (from outside in)", "#98eccc", box); // 아래로 요약
data.forEach((v) => makeTemplate(v.title, v.color, v.buttons));
