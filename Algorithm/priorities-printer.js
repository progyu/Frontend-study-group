function solution(priorities, location) {
  let objArr = priorities.map((priority, index) =>{
    return {index, priority}
  });

  // [ { index: 0, priority: 1 },
  //   { index: 1, priority: 1 },
  //   { index: 2, priority: 9 },
  //   { index: 3, priority: 1 },
  //   { index: 4, priority: 1 },
  //   { index: 5, priority: 1 } ]

  let queue = [];

  // [ { index: 2, priority: 9 },
  //   { index: 3, priority: 1 },
  //   { index: 4, priority: 1 },
  //   { index: 5, priority: 1 },
  //   { index: 0, priority: 1 },
  //   { index: 1, priority: 1 } ]

  while (objArr.length > 0) {
    if (objArr[0].priority === Math.max(...objArr.map(obj => obj.priority))) {
      queue.push(objArr.shift());
    } else {
      objArr.push(objArr.shift());
    }
  }

  return queue.findIndex(({index})=> index === location) + 1;
}


// function solution(priorities, location) {
//   let obj = { ...priorities }; // { '0': 1, '1': 1, '2': 9, '3': 1, '4': 1, '5': 1 }
//   let objArr = [];

//   for (let key in obj) {
//     objArr.push({ key, priority: obj[key] });
//   }

//   const goal = objArr[location];

//   //  objArr
//   //  [ { key: '0', priority: 1 },
//   //   { key: '1', priority: 1 },
//   //   { key: '2', priority: 9 },
//   //   { key: '3', priority: 1 },
//   //   { key: '4', priority: 1 },
//   //   { key: '5', priority: 1 } ]

//   let arr = [];

//   while (objArr.length > 0) {
//     if (objArr[0].priority === Math.max(...objArr.map(obj => obj.priority))) {
//       arr.push(objArr.shift());
//     } else {
//       objArr.push(objArr.shift());
//     }
//   }

//   for(let i = 0; i < arr.length; i++) {
//     if(goal.key === arr[i].key) return i+1;
//   }
// }


const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;
// const priorities = [1,2,3,2];
// const location = 2;

console.log(solution(priorities, location)); //5
