// 카페 포스키 프로그램

// 카페에
// 기본메뉴:[아아,라떼]
// 가격: 2500,300

// 정산프로그램
// 커피이름, 가격, 갯수 입력받으면 총 가격을 돌려주는 함수

const cafe = {
  menu: [
    { name: "아메리카노", price: 2500 },
    { name: "라떼", price: 3000 },
  ],
  cost: function (name, price, amount) {
    return price * amount;
  },
  info: function () {
    console.log(this.menu);
  },
  addMenu: function () {
    const name1 = prompt("메뉴 이름 입력");
    const price1 = Number(prompt("메뉴 가격 입력"));
    this.menu.push({ name: name1, price: price1 });
  },
  // 메뉴 삭제 만들기
  // 유저에게 커피이름을 입력받으면 해당 메뉴 삭제하기!
  deleteMenu: function () {
    const coffee = prompt("메뉴 삭제 이름");
    this.menu.filter((x) => x.name != coffee);
  },
};

cafe.addMenu();
cafe.addMenu();
cafe.info();
