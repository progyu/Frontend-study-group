// B. 문자열 압축 문제

// 문자열을 아래와 같은 방식으로 압축하는 함수를 작성해주세요.
// (ZZZAAAABBCCQ => 3Z4A2B2C1Q)

// 압축된 문자열을 아래와 같은 방식으로 해제하는 함수를 작성해주세요.
// (3Z4A2B2C1Q => ZZZAAAABBCCQ)

// 문자열을 압축하는 함수
const stringCompress = s => {
  let compressedStr = "";
  let count = 1;
  let char = s[0];

  for (let i = 1; i <= s.length; i += 1) {
    let nextChar = s[i];
    if (char === nextChar) {
      count += 1;
    } else {
      compressedStr += count + char;
      char = nextChar;
      count = 1;
    }
  }
  return compressedStr;
};

// 문자열을 해제하는 함수
const stringDecompress = s => {
  let deCompressedStr = "";

  for (let i = 0; i < s.length; i += 1) {
    let toNumberType = +s[i];

    if (toNumberType) {
      // 숫자이면 true, 숫자가 아닌 문자는 NaN으로 평가되어  false
      deCompressedStr += s[i + 1].repeat(toNumberType);
    }
  }
  return deCompressedStr;
};

// const string = "ABCDEFG";
const string = "ZZZAAAABBCCQ";
const Compressedstring = stringCompress(string);

console.log(stringCompress(string));
console.log(stringDecompress(Compressedstring));
