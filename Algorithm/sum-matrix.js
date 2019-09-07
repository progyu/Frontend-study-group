// function solution(arr1,arr2){
//   var answer = [];
//   for(var i=0; i < arr1.length; i++){
//       answer[i] = [];
//       for(var j=0; j < arr1[0].length; j++){
//           answer[i][j] = arr1[i][j]+arr2[i][j];
//       }
//   }
//   return answer;
// }


// var arr1 = [[1,2],[2,3]];
// var arr2 = [[3,4],[5,6]];

// console.log(solution(arr1, arr2));  // [[4,6],[7,9]]


// function solution(arr1,arr2){
//   return arr1.map((a,i) => a.map((b, j) => b + arr2[i][j]));
// }


// var arr1 = [[1,2],[2,3]];
// var arr2 = [[3,4],[5,6]];

// console.log(solution(arr1, arr2));  // [[4,6],[7,9]]


function solution(clothes) {
  let answer = 1;
  let obj = {};
  
  clothes.forEach(cloth => {
    if(cloth[1] in obj) 
      obj[cloth[1]] += 1;
    else
      obj[cloth[1]] = 1;
  })

  for (let cloth in obj) {
    answer *= obj[cloth] + 1;
  }
  
  return answer -1;
}

var clothes = [["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]];

console.log(solution(clothes));
