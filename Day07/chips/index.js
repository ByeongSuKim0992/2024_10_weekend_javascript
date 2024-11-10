import { data } from "./data.js";
import { makeChip } from "./func.js";

const container = document.querySelector(".container");
data.forEach((v) =>
  container.insertAdjacentHTML("beforeend", makeChip(v.avatar, v.fullName))
);
