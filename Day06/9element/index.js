import { data } from "./data.js";
import { makeTemplate } from "./func.js";
data.forEach((v) => makeTemplate(v.title, v.color, v.buttons));

// makeTemplate("Position and Layout", "#fac0ba", position);
// makeTemplate("Display and Visibility", "#ffc089", display);
// makeTemplate("Clipping", "#ffe18b", clipping);
// makeTemplate("Animation", "#c8df91", animation);
// makeTemplate("Box Model (from outside in)", "#98eccc", box);
