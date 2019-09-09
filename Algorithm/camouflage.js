function solution(clothes) {
  let answer = 1;

  let clothesType = {};

  clothes.forEach(cloth => {
    if( cloth[1] in clothesType) {
      clothesType[cloth[1]] += 1;  
      console.log(clothesType);
    } else {
      clothesType[cloth[1]] = 1;
    }
  });

  for (let cloth in clothesType) {
    answer *= clothesType[cloth] + 1;
  }

  return answer -1;
}

var clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];
console.log(solution(clothes));
 
