const button = document.querySelector("#button");

button.addEventListener("click", () => {
  fetch("https://fakerapi.it/api/v2/persons?_quantity=10")
    .then((response) => response.json())
    .then((v) => console.log(v.data));
});
