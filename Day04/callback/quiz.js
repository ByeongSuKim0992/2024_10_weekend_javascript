// skill 함수를 정의하고
// 스킬 발동! ~~~ 스킬 마무리!
// const triggerSkill = (skill) => {
//     console.log("스킬 발동!");
//     skill();
//     console.log("스킬 마무리!");
// }

// const elementSkill = (element) => {
//     console.log(`${element} 모으기`);
//     console.log(`${element} 발사`);
// };

// const skills = ["🧊","⚡","🔥","💨"];
// const skillNumber = Number(prompt("🧊⚡🔥💨 중에 어떠한 스킬을 발동시킬까요?"));
// triggerSkill(() => elementSkill(skills[skillNumber]));

// 얼음 스킬 -> 얼음 모으기, 얼음 발사
// const iceSkill = () => {
//     console.log("🧊 모으기");
//     console.log("🧊 발사");
// };
// 썬더 스킬 -> 번개 모으기, 번개 발사
// const thunderSkill = () => {
//     console.log("⚡ 모으기");
//     console.log("⚡ 발사");
// };
// 불 스킬 -> 불 피우기, 불 발사
// const fireSkill = () => {
//     console.log("🔥 피우기");
//     console.log("🔥 발사");
// };

// 유저에게 어떠한 스킬을 발동시킬까요 (1,2,3)
// const howSkill = Number(prompt("어떠한 스킬을 발동시킬까요(1,2,3)")
// )
// 콘솔로 결과값 나타내기!

//타코 음식 만들기!

// 유저에게 타코 메뉴를 선택하고(🦐,🥩,🍗,🧀)
const menus = ["🦐","🥩","🍗","🧀"];
const menuNumber = Number(prompt("🦐 🥩 🍗 🧀 중 메뉴를 선택하세요"));
// 요리 하기 함수를 만들기(요리시작! ~ 요리끝!)
const cooking = (menu) => {
    console.log("요리시작!");
    menu();
    console.log(`${menuNumber} 요리끝!`)
};
// 타코 만들기 함수를 만들기(🦐,🥩,🍗,🧀)
// 1. 타코 준비 -> 2. 메뉴 넣기 -> 3. 굽기 -> 4. 타코완성
const tacoCook = () => {
    console.log("타코 준비");
    console.log(`${menu} 넣기`);
    console.log("굽기");
    console.log(`${menu} 타코 완성!`);
};

cooking(() => tacoCook(menus[menuNumber]));
// 준비된 ~~타코가 나왔습니다!