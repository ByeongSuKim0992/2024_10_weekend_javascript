const container = document.createElement("section");
container.style.cssText = "display : flex; gap : 10px;";

// const btn = document.createElement("button");
// btn.innerText = "아메리카노";

// const btn1 = document.createElement("button");
// btn1.innerText = "라떼";

// const btn2 = document.createElement("button");
// btn2.innerText = "바닐라 라떼";

const makeButton = (coffeeName) => {
    const btn = document.createElement("button");
    btn.innerText = coffeeName;
    return btn;
};

["아메리카노", "라떼", "민트"].forEach((v) =>
    container.appendChild(makeButton(v))
);

// container.appendChild(btn);
// container.appendChild(btn1);
// container.appendChild(btn2);

document.body.appendChild(container);