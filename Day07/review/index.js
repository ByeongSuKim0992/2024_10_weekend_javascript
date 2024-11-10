const container = document.createElement("section");
container.style.cssText = "display: flex; flex-direction:column; gap:22px";
document.body.appendChild(container);

const btn = document.createElement("button");
btn.innerText = "Button";
btn.style.cssText = "background-color:#2563EB; border:1px solid #2563EB; color:#white;"
container.appendChild(btn);

