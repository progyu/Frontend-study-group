function solution(heights) {
    var answer = [0];
    
    for(let i =1; i < heights.length; i++) {
        for(let j = i-1; j >= 0; j--) {
            if(heights[j] > heights[i]) {
                answer.push(j+1);
                break;
            }
            if(j===0) {
              answer.push(0);
            }
        }

    }
    return answer;
}

const heights = [6,9,5,7,4];  //[0,0,2,2,4]
// const heights = [3,9,9,3,5,7,2] // [0,0,0,3,3,3,6]
// const heights = [1,5,3,6,7,6,5] // [0,0,2,0,0,5,6]
console.log(solution(heights));