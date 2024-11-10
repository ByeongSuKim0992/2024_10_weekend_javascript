import { data } from "./data.js";
import { makeChip } from "./func.js";
const container = document.querySelector(".container");

container.insertAdjacentHTML(
  "beforeend",
  makeChip(data[0].avatar, data[0].full_name)
);
