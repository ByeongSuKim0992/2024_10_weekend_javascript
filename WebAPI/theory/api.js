// fetch("https://fakerapi.it/api/v2/books?_quantity=5") // 해당 URL에 요청하기!
//   .then((reponse) => reponse.json()) // 요청이 끝난 후의 Response를 받은 다음 json화
//   .then((v) => console.log(v)); // 콘솔화

//Quiz
//address를 10개 데이터 가져오고
//address를 콘솔에 streetName만 10개 찍히도록 하기!

fetch("https://fakerapi.it/api/v2/addresses?_quantity=10")
  .then((response) => response.json())
  .then((v) => console.log(v.data.map((x) => x.streetName)));
