//1. 이메일 주소를 입력받고, 도메인을 돌려주는 함수 만들기
// hint) split 함수 활용
// ex) itkorea@naver.com -> naver
const getDomain = (email) => {
  return email.split("@")[1].split(".")[0];
};
// const getDomain = (email) => {
//     const arr = email.split("@"); // [itkorea,naver.com]
//     const arr1 = arr[1].split("."); //[naver.com]
//     return arr1[0];
// }

//2. 영어 신문기사를 입력 받고, 모두 대문자로 바꾸는 함수 만들기!
const newsUpper = (article) => {
  return article.toUppercase();
};

//3. 영어뉴스 기사를 가져오고 단어별로 나누고, 첫번째, 두번째, 세번째 단어들을 돌려주기!
const returnWords = (article) => {
  const words = article.split(" ");
  return [words[0], worde[1], words[2]];
};
