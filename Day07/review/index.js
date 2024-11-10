const container = document.createElement("section");
container.style.cssText = "display:flex;flex-direction:column;gap:22px;";
document.body.appendChild(container);

const makeButton = (color) => {
  const btn = document.createElement("button");
  btn.style.cssText = `background-color:${color};border:1px solid ${color};padding:10px 12px; color:white;border-radius:30px;width:fit-content`;
  btn.innerText = "Button";
  container.appendChild(btn);
};

//trinity

const colorList = ["#2563EB", "#1D4ED8", "purple", "#DBEAFE"];
colorList.forEach((v) => makeButton(v));
