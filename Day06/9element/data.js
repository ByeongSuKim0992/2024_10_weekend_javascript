// export const position = [
//   "positiony",
//   "z-index",
//   "top",
//   "button",
//   "right",
//   "Flexbox properties",
//   "float",
//   "clear",
// ];
// export const display = ["display", "opacity", "transform"];
// export const clipping = ["overflow", "clipping"];
// export const animation = ["animation", "transition"];
// export const box = [
//   "margin",
//   "box-shadow",
//   "boder",
//   "boder-radius",
//   "box-sizing",
//   "width",
//   "height",
//   "padding",
// ];

import { colorMap } from "./style.js";

export const data = [
  {
    title: "Position and Layout",
    // color: "#fac0ba", // colorMap 만들어 지면서 변경
    color: colorMap.pink,
    buttons: [
      "positiony",
      "z-index",
      "top",
      "bottom",
      "right",
      "Flexbox properties",
      "float",
      "clear",
    ],
  },
  {
    title: "Display and Visibility",
    // color: "##ffc089", // colorMap 만들어 지면서 변경
    color: colorMap.orange,
    buttons: ["display", "opacity", "transform"],
  },
  {
    title: "Clipping",
    // color: "#ffe18b", // colorMap 만들어 지면서 변경
    color: colorMap.yellow,
    buttons: ["overflow", "clipping"],
  },
  {
    title: "Animation",
    // color: "#c8df91", // colorMap 만들어 지면서 변경
    color: colorMap.green,
    buttons: ["animation", "transition"],
  },
  {
    title: "Box Model (from outside in)",
    // color: "#98eccc", // colorMap 만들어 지면서 변경
    color: colorMap.teal,
    buttons: [
      "margin",
      "box-shadow",
      "border",
      "border-radius",
      "box-sizing",
      "width",
      "height",
      "padding",
    ],
  },
];
// import { colorMap } from "./style.js";

// export const data = [
//   {
//     title: "Position and Layout",
//     color: colorMap.pink,
//     buttons: [
//       "positiony",
//       "z-index",
//       "top",
//       "bottom",
//       "right",
//       "Flexbox properties",
//       "float",
//       "clear",
//     ],
//   },
//   {
//     title: "Display and Visibility",
//     color: colorMap.orange,
//     buttons: ["display", "opacity", "transform"],
//   },
//   {
//     title: "Clipping",
//     color: colorMap.yellow,
//     buttons: ["overflow", "clipping"],
//   },
//   {
//     title: "Animation",
//     color: colorMap.green,
//     buttons: ["animation", "transition"],
//   },
//   {
//     title: "Box Model (from outside in)",
//     color: colorMap.teal,
//     buttons: [
//       "margin",
//       "box-shadow",
//       "border",
//       "border-radius",
//       "box-sizing",
//       "width",
//       "height",
//       "padding",
//     ],
//   },
// ];
