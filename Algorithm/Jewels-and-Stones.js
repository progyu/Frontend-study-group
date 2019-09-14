// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3
// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0
// Note:

// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

// const numJewelsInStones = function(J, S) {
//     let result = 0;

//     for(let i = 0; i < S.length; i++) {
//       for(let j = 0; j < J.length; j++) {
//         if(S[i] === J[j]) result += 1;
//       }
//     }

//     return result;
// };

var numJewelsInStones = function(J, S) {
    var jewels = new Set(J);
    console.log(jewels);
    var numOfJewels = 0;
    for (var i = 0; i < S.length; i++) {
        if (jewels.has(S.charAt(i))) numOfJewels++;
    }
    return numOfJewels;
};

// const numJewelsInStones = (J, S) => {
	
// 	//convert strings to arrays
//     const jewels = J.split('');
//     const stones = S.split('');
	
// 	//create a new array (jewelsInStones) with the filtered results
//     const jewelsInStones = stones.filter(el => jewels.includes(el));
//     return jewelsInStones.length
// };

// const J = "z";
// const S = "ZZ";
const J = "aA";
const S = "aAAbbb";

console.log(numJewelsInStones(J, S));
