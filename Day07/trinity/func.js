const makeImage = (image) =>
  `
      <div class="image">
          <img src="${image}" alt="" />
      </div>
  `;

const makeInfo = (title, price, detail) =>
  `
      <div class="info">
          <h3>${title}</h3>
          <h4>${price}</h4>
          <span>${detail}</span>
      </div>
  `;
export const makeRoomCard = (image, title, price, detail) =>
  `
<div class="roomCard">
    ${makeImage(image)}
    ${makeInfo(title, price, detail)}
</div>
`;
