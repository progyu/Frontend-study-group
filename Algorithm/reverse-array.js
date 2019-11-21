function solution(n) {
  return n.toString().split('').reverse().map(n => +n);
}


const n = 12345;
console.log(solution(n));