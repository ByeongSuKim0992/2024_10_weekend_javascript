const makeDough = (next) => {
  console.log("도우 만들기");
  next();
};
const makeTomato = (next) => {
  console.log("토마토 바르기");
  next();
};

const makeCheese = (next) => {
  console.log("치쯔 뿌리기");
  next();
};
const makeHot = (next) => {
  console.log("화덕에 올리기");
  next();
};

const makePizza = () =>
  makeDough(() => makeTomato(() => makeCheese(() => makeHot())));
