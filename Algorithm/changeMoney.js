// 각 동전의 가치는 바로 다음에 오는 동전의 가치의 약수
// 거스름돈을 주기위해서 최소로 필요한 동전의 수?

function changeMoney(N,C,K) {
  
  let reverseC = C.reverse();
  let countCoins = 0;
  let result = 0;

  for(let i=0; i< N; i++) {
    result = K % reverseC[i];
    countCoins += Math.floor(K / reverseC[i]);
    K = result;
  }

  return countCoins;
}

const N1 = 5; // 동전의 수
const C1 = [1,3,6,12,24]; // 각 동전의 가치
const K1 = 70; // 거스름돈의 양
console.log(changeMoney(N1,C1,K1)); // (24*2 + 12 + 6 + 3 + 1)  6

const N2 = 1;
const C2 = [1];
const K2 = 10;
console.log(changeMoney(N2,C2,K2)); // 10