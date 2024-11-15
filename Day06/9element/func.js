// import { buttonBoxStyle, cardStyle, titleStyle } from "./style.js";

// export const makeTemplate = (titleName, color, buttonList) => {
//   // const card = document.createElement("section");
//   // card.style.cssText = "display:flex; flex-direction:column; gap:10px;"; // makeCard가 만들어지면서 변경
//   const card = makeCard();

//   // const title = document.createElement("h4");
//   // title.innerText = titleName;
//   // title.style.cssText = `font-size:14px; color:#878787`; // makeTitle 만들어지면서 변경
//   const title = makeTitle(titleName);
//   card.appendChild(title);

//   // const buttonBox = document.createElement("div");
//   // buttonBox.style.cssText = "display:flex; gap:5px;"; // makeButtonBox 만들어지면서 변경
//   const buttonBox = makeButtonBox();
//   card.appendChild(buttonBox);

//   // buttonList.forEach((color, v) => {
//   //   // const btn = document.createElement("button");
//   //   // btn.style.cssText = `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`;
//   //   // btn.innerText = v; // makeButton 만들어지면서 아래로 변경
//   //   // const btn = makeButton(color, v);
//   //   // buttonBox.appendChild(btn); // 아래로 변경
//   //   buttonBox.appendChild(makeButton(color, v));
//   // });// 아래로 변경
//   buttonList.forEach((color, v) => buttonBox.appendChild(makeButton(color, v)));
//   document.body.appendChild(card);
// };

// const makeCard = () => {
//   const card = document.createElement("section");
//   // card.style.cssText = "display:flex; flex-direction:column; gap:10px;"; // style.js를 만들면서 아래로 변경
//   card.style.cssText = cardStyle;
//   return card;
// };

// const makeTitle = (titleName) => {
//   const title = document.createElement("h4");
//   title.innerText = titleName;
//   // title.style.cssText = `font-size:14px; color:#878787`; // style.js를 만들면서 아래로 변경
//   title.style.cssText = titleStyle;
//   return title;
// };

// const makeButtonBox = () => {
//   const buttonBox = document.createElement("div");
//   // buttonBox.style.cssText = "display:flex; gap:5px;"; // style.js를 만들면서 아래로 변경
//   buttonBox.style.cssText = buttonBoxStyle;
//   return buttonBox;
// };

// const makeButton = (color, buttonText) => {
//   const button = document.createElement("button");
//   // button.style.cssText = `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`; // makeButtonStyle 만들어지면서 아래로 변경
//   button.style.cssText = makeButtonStyle(color);
//   button.innerText = buttonText;
//   return button;
// };

// const makeButtonStyle = (color) =>
//   `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`;

import { buttonBoxStyle, cardStyle, titleStyle } from "./style.js";

export const makeTemplate = (titleName, color, buttonList) => {
  const card = makeCard();
  const title = makeTitle(titleName);
  const buttonBox = makeButtonBox();
  card.appendChild(title);
  card.appendChild(buttonBox);
  buttonList.forEach((v) => buttonBox.appendChild(makeButton(color, v)));
  document.body.appendChild(card);
};

const makeCard = () => {
  const card = document.createElement("section");
  card.style.cssText = cardStyle;
  return card;
};

const makeTitle = (titleName) => {
  const title = document.createElement("h4");
  title.innerText = titleName;
  title.style.cssText = titleStyle;
  return title;
};

const makeButtonBox = () => {
  const buttonBox = document.createElement("div");
  buttonBox.style.cssText = buttonBoxStyle;
  return buttonBox;
};

const makeButton = (color, buttonText) => {
  const button = document.createElement("button");
  button.style.cssText = makeButtonStyle(color);
  button.innerText = buttonText;
  return button;
};

const makeButtonStyle = (color) =>
  `background-color: ${color};border:1px solid ${color}; border-radius: 5px; padding: 10px 10px 7px;font-weight: bold;`;
