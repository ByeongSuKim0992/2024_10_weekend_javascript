import { data } from "./data.js";
import { makeChip } from "./func.js";

const container = document.querySelector(".container");

// container.insertAdjacentHTML("beforeend",
//   `
//   <div class="chip">
//     <div class="image">
//       <img src=" " alt="" />
//     </div>
//     <span>Joshua</span>
//   </div>
//   `
// );

// const makeChip =(image, name) =>
//   `
//   <div class="chip">
//     <div class="image">
//       <img src="${image}" alt="" />
//     </div>
//     <span>${name}</span>
//   </div>
// `;
// func.js로 이사

//container.insertAdjacentHTML("beforeend",
//   `
//   ${makeChip()}
// );

//container.insertAdjacentHTML("beforeend", makeChip());

data.forEach((v) =>
  container.insertAdjacentHTML("beforeend", makeChip(v.avatar, v.fullName))
);
