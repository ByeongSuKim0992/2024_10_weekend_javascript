//JS로 HTML 다루기!

//document[html]
const btn = document.createElement("button");
btn.innerText = "멜론빵";
document.body.appendChild(btn);

// 1.
// div 태그 만들고
// 안에는 좋아하는 커피 넣고
// 바디태크에 달아서 넣기
const divTag = document.createElement('div');
div.innerText = "아이스아메리카노";
document.body.appendChild(divTag);


// 2.
// 유저에게 원하는 태그와 내용을 한번에 입력받고
// 바디태그에 나타내기!
const input = prompt("태그와 내용 입력");
const arr = input.split("");