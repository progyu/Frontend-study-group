// D. 세 점이 한 직선에 있을까?

// 세 점이 주어지면, 직선상에 있는지 확인하는 코드를 작성해 주세요.

// boolean isStraightLine(int x1, int y1, int x2, int y2, int x3, int y3)
// (0,0), (1,1), (2,2) = true
// (0,0), (1,2), (2,2) = false

const isStraightLine = (...dot) => {
  let dotArr = [];

  for (let i = 0; i < dot.length; i += 2) {
    dotArr.push(dot.slice(i, i+2));
  }

  const starightAbSlope = (dotArr[0][1] - dotArr[1][1]) / (dotArr[0][0] - dotArr[1][0]);
  const starightBcSlope = (dotArr[1][1] - dotArr[2][1]) / (dotArr[1][0] - dotArr[2][0]);
  const starightAcSlope = (dotArr[0][1] - dotArr[2][1]) / (dotArr[0][0] - dotArr[2][0]);

  if(starightAbSlope !== starightBcSlope) return false;
  if(starightBcSlope !== starightAcSlope) return false;

  return true;
}

// console.log(isStraightLine(0,0,1,1,2,2));
// console.log(isStraightLine(0,3,1,8,2,2));
console.log(isStraightLine(0,5,7,-2,2,3));