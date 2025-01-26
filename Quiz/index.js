// html에 토마토 피자, 치즈 피자, 불고기 피자 버튼
// 각각 버튼을 누르면 콘솔에 피자 만드는 단계 보여주면 됩니다.
// 피자 만드는 레시피
//1. 도우 만들기! [3]
//2. ~~ 토핑 올리기! [2]
//3. 화덕에 굽기! [3]
//4. 피자완성! [1]

const makeDough = () => {
  return new Promise((success, fail) => {
    console.log("도우 만드는 중!");
    setTimeout(() => {
      success("나폴리 도우");
    }, 3000);
  });
};

const addTopping = (dough, topping) => {
  return new Promise((success, fail) => {
    console.log(`${dough}에 ${topping} 올리는중!`);
    setTimeout(() => {
      success(`${topping} ${dough} `);
    }, 2000);
  });
};

const bakeDough = (doughWithTopping) => {
  return new Promise((success, fail) => {
    console.log(`${doughWithTopping}을 화덕에 넣는 중!`);
    setTimeout(() => {
      console.log(`${doughWithTopping} 피자 굽기 완료`);
      success(`${doughWithTopping} 피자`);
    }, 3000);
  });
};

const packPizza = (pizza) => {
  return new Promise((success, fail) => {
    console.log(`${pizza}를 포장중...`);
    setTimeout(() => {
      success(`${pizza}포장 완료`);
    }, 1000);
  });
};

const makePizza = async (topping) => {
  const dough = await makeDough();
  const doughWithTopping = await addTopping(dough, topping);
  const bakedPizza = await bakeDough(doughWithTopping);
  const pizza = await packPizza(bakedPizza);
  console.log(pizza);
};
makePizza("🧀");
