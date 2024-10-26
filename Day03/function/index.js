// 함수:입력값을 받으면 가공을 통해서 결과값을 나타내는 것
// 비유 : 마술상자

function add(a, b) {
    return a + b;
};

function double(a){
    return a ** 2;
};

const result = add(1, 2);
const result1 = double(3);

console.log(`${result} ${result1}`);

// 신 함수 문법(화살표 함수)

const minus = (x, y) => {
    return x - y;
};

const result2 = minus(10, 5); //5

// 어떠한 문자를 넣으면 !!!를 붙혀서 돌려주는 화살표 함수!
const plusMark = (x) => {
    return x + !!!;
};
// 어떠한 정수를 넣으면 반값을 돌려주눈 화살표 함수!
const half = (x) => {
    return x / 2;
};