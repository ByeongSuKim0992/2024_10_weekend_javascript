const button = document.querySelector("#button");
const input = document.querySelector("#input");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  list.innerHTML = "로딩중";
  fetch(`https://fakerapi.it/api/v2/books?_quantity=${Number(input.value)}`)
    .then((response) => response.json())
    .then((v) => {
      list.innerHTML = "";
      v.data.forEach((x) =>
        list.insertAdjacentHTML("beforeend", `<li>${x.title}</li>`)
      );
    });
});
