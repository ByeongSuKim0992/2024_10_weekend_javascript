import { buttonBoxStyle, cardStyle, titleStyle} from "./style.js";
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
        card.style.cssText = "display:flex; flex-direction:column; gap:10px;";
        return card;
    };

    const makeTitle = (titleName) => {
        const title = document.createElement("h4");
        title.innerText = titleName;
        title.style.cssText = 'front-size:14px; color:#878787';
        return title;
    };

    const makeButtonBox = () => {
        const buttonBox = document.createElement("div");
        buttonBox.style.cssText = "display:flex; gap:5px;";
        return buttonBox;
    };

    const makeButton = (color, buttonText) => {
        const button = document.createElement("button");
        button.style.cssText = makeButtonStyle(color);
        button.innerText = buttonText;
        return button;
    };

    const makeButtonStyle = (color) => `background-color: ${color};border:1px solid ${color}; border-radius:5px; padding:10px 10px 7px;weight:blod;`;
