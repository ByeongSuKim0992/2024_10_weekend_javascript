export const makeChip = (image, name) =>
  `
      <div class="chip">
          <div class="image">
            <img src="${image}" alt="" />
          </div>
          <span>${name}</span>
      </div>
  
  `;
