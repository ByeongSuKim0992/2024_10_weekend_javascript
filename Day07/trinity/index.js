// html : 웹사이트 구조 파일
// css : 스타일 + 구조 파일
// js : 데이터와 연관된 구조/퍼블리싱 + 이벤트(클릭하기, 키보드입력, 터치, 스크롤)

import { data } from "./data.js";
import { makeRoomCard } from "./func.js";

//✅ 첫번째 문법!
const container = document.querySelector(".container");

// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[0].imgUrlList[0], data[0].priceTitle, data[0].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[1].imgUrlList[1], data[1].priceTitle, data[1].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[2].imgUrlList[2], data[2].priceTitle, data[2].roomDesc)
// );
// container.insertAdjacentHTML(
//   "beforeend",
//   makeRoomCard(data[3].imgUrlList[3], data[3].priceTitle, data[3].roomDesc)
// );

//✅ 두번째 문법!
data.forEach((v) =>
  container.insertAdjacentHTML(
    "beforeend",
    makeRoomCard(v.imgUrlList[0], v.roomTitle, v.priceTitle, v.roomDesc)
  )
);
