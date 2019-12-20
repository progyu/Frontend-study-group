// C. 차량번호 확인하기

// 차량번호 형식이 올바른지 확인하는 함수를 만들어주세요.
// 차량번호 형식: 문자 2개 + 숫자 2개 + 문자 1개 + 숫자 4개

const isRightCarNumFormat = carNum => {
  if (carNum.length !== 9) return false;

  const region = carNum.slice(0, 2);
  const typeOfCar = carNum.slice(2, 4);
  const usage = carNum.slice(4, 5);
  const registrationNum = carNum.slice(5);

  const sliceArr = [region, typeOfCar, usage, registrationNum];

  const countChar = sliceCarNum => {
    let numberOfChar = 0; // 문자의 개수

    for (let j = 0; j < sliceCarNum.length; j += 1) {
      // 문자일 경우 true
      if (isNaN(+sliceCarNum[j])) {
        numberOfChar += 1;
      }
    }
    return numberOfChar;
  };

  for (let i = 0; i < sliceArr.length; i++) {
    if (countChar(sliceArr[0]) !== 2) return false;
    if (countChar(sliceArr[1]) !== 0) return false;
    if (countChar(sliceArr[2]) !== 1) return false;
    if (countChar(sliceArr[3]) !== 0) return false;
  }

  return true;
};

// const carNum = '서127가8421';
const carNum = "서울27가8420";
console.log(isRightCarNumFormat(carNum));
