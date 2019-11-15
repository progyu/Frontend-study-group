function solution (n, arr1, arr2) {
  const arr1Tobinary = arr1.map(code => code.toString(2)); 
  const arr2Tobinary = arr2.map(code => code.toString(2));

  for(let i = 0; i < n; i++) {
    arr1Tobinary[i] = '0'.repeat(n-arr1Tobinary[i].length)+arr1Tobinary[i];
    arr2Tobinary[i] = '0'.repeat(n-arr2Tobinary[i].length)+arr2Tobinary[i];
  }

  let result = [];

  for(let j = 0; j < n; j++) {
    const rn = +arr1Tobinary[j]+ +arr2Tobinary[j];
    result.push('0'.repeat(n - rn.toString().length)+ ''+ rn);
  }

  const end = result.map(decode => {
    return Array.from(''+decode).map(to => {
      return +to ? '#' : ' '
    })
  });

  const realEnd = end.map(to=> to.join(''));
  
  return realEnd;
}

const n = 6;
const arr1 = [46, 33, 33 ,22, 31, 50];
const arr2 = [27 ,56, 19, 14, 14, 10];
// const n = 5;
// const arr1 = [9, 20, 28, 18, 11];
// const arr2 = [30, 1, 21, 17, 28];
console.log(solution(n,arr1,arr2));