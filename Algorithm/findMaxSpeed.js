function findMaxSpeed (N, M , V, C) {

  let cost = 0;
  let maxSpeed = 0;
  const maxCost = C.sort((a,b) => b -a)[0]; 
  const minSpeed = V.sort()[0]; 

  if(maxCost > M) {
    return minSpeed;
  }

  while(cost <= M) {
    maxSpeed++;
    for (let i = 0; i < N; i++) {
      if(maxSpeed > i) {
        cost += C[i] * (maxSpeed - V[i]);
      }
    }
    if(cost < M) {
      cost = 0;
    }
  }

  return maxSpeed-1;
}


const N1 = 5;
const M1 = 100;
const V1 = [1,2,3,4,5];
const C1 = [5,4,3,2,1];
console.log(findMaxSpeed(N1,M1,V1,C1));

const N2 = 5;
const M2 = 10;
const V2 = [1,2,3,4,5];
const C2 = [5,4,3,2,1];
console.log(findMaxSpeed(N2,M2,V2,C2));

const N3 = 5;
const M3 = 1;
const V3 = [1,2,3,4,5];
const C3 = [5,4,3,2,1];
console.log(findMaxSpeed(N3,M3,V3,C3));
// const findMaxSpeed = (N, M , V, C) => {

//   let cost = 0;
//   let maxSpeed = 0;
//   const maxCost = C.sort((a,b) => b -a)[0]; 
//   const minSpeed = V.sort()[0]; 

//   if(maxCost > M) {
//     return minSpeed;
//   }

//   while(cost <= M) {
//     maxSpeed++;
//     for (let i = 0; i < N; i++) {
//       if(maxSpeed > i) {
//         cost += C[i] * (maxSpeed - V[i]);
//       }
//     }
//     if(cost < M) {
//       cost = 0;
//     }
//   }

//   return maxSpeed-1;
// }


// const N1 = 5;
// const M1 = 100;
// const V1 = [1,2,3,4,5];
// const C1 = [5,4,3,2,1];
// console.log(findMaxSpeed(N1,M1,V1,C1));

// const N2 = 5;
// const M2 = 10;
// const V2 = [1,2,3,4,5];
// const C2 = [5,4,3,2,1];
// console.log(findMaxSpeed(N2,M2,V2,C2));

// const N3 = 5;
// const M3 = 1;
// const V3 = [1,2,3,4,5];
// const C3 = [5,4,3,2,1];
// console.log(findMaxSpeed(N3,M3,V3,C3));
