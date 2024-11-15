import { palleteStyle } from "./style.js";

//리팩토링(깍거나 줄이는 것)
export const makeColor = (color) => {
  const box = document.createElement("div");
  //   box.style.cssText = `width:100%;height:100%;background-color:${color}`; // paint 함수 만들어지면서 아래로 변경
  box.style.cssText = paint(color);
  return box;
};

export const makePallete = () => {
  const pallete = document.createElement("section");
  // pallete.style.cssText = "width:100vw;height:100vh;display:grid;grid-template-columns:repeat(5, 1fr)"; //style.js pallete 만들어지면서 아래로 변경
  pallete.style.cssText = palleteStyle;
  return pallete;
};

const paint = (color) => `width:100%;height:100%;background-color:${color}`;
